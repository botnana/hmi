#! /bin/sh
### BEGIN INIT INFO
# Provides:          botnana_hmi_composite_gadget
# Required-Start:    $remote_fs $syslog
# Required-Stop:     $remote_fs $syslog
# Default-Start:     2 3 4 5
# Default-Stop:      0 1 6
# Short-Description: Composite Gadget over USB
### END INIT INFO

# Author: Cheng-Chang Wu <ccwu660601@mapacode.tw>
#

NAME="botnana-hmi-composite-gadget.sh"
DESC="Composite Gadget over USB"

PATH=/sbin:/usr/sbin:/bin:/usr/bin

[ -x "/sbin/iptables" ] || exit 0

do_start()
{
	SERIAL_NUMBER="12345678"
	PRODUCT="BotBone"
	MANUFACTURER="Leadtek"

	mac_address="/proc/device-tree/ocp/ethernet@4a100000/slave@4a100200/mac-address"
	if [ -f ${mac_address} ] ; then
		cpsw_0_mac=$(hexdump -v -e '1/1 "%02X" ":"' ${mac_address} | sed 's/.$//')
		echo "cpsw.0: ${cpsw_0_mac}"
	fi

	mac_address="/proc/device-tree/ocp/ethernet@4a100000/slave@4a100300/mac-address"
	if [ -f ${mac_address} ] ; then
		cpsw_1_mac=$(hexdump -v -e '1/1 "%02X" ":"' ${mac_address} | sed 's/.$//')
		echo "cpsw.1: ${cpsw_1_mac}"
	fi

	modprobe g_multi file=/dev/mmcblk0p1 cdrom=0 stall=0 removable=1 nofua=1 iSerialNumber=${SERIAL_NUMBER} iManufacturer=${MANUFACTURER}  iProduct=${PRODUCT} host_addr=${cpsw_1_mac}

	sleep 1

	if [ -f /etc/default/udhcpd ] ; then
		unset udhcp_disabled
		udhcp_disabled=$(grep \#DHCPD_ENABLED /etc/default/udhcpd || true)
		if [ "x${udhcp_disabled}" = "x" ] ; then
			sed -i -e 's:DHCPD_ENABLED="no":#DHCPD_ENABLED="no":g' /etc/default/udhcpd
		fi
	fi

	if [ -f /etc/udhcpd.conf ] ; then
		#Distro default...
		unset deb_udhcpd
		deb_udhcpd=$(grep Sample /etc/udhcpd.conf || true)
		if [ ! "x${deb_udhcpd}" = "x" ] ; then
			mv /etc/udhcpd.conf /etc/udhcpd.conf.bak

			echo "start      192.168.7.1" > /etc/udhcpd.conf
			echo "end        192.168.7.1" >> /etc/udhcpd.conf
			echo "interface  usb0" >> /etc/udhcpd.conf
			echo "max_leases 1" >> /etc/udhcpd.conf
			echo "option subnet 255.255.255.252" >> /etc/udhcpd.conf
		fi
		/etc/init.d/udhcpd restart

		/sbin/ifconfig usb0 192.168.7.2 netmask 255.255.255.252
		/usr/sbin/udhcpd -S /etc/udhcpd.conf
	fi

	iptables -t nat -A PREROUTING -i usb0 -p tcp --dport 80 -j REDIRECT --to-port 3000

}

case "$1" in
  start)
	log_daemon_msg "Starting $DESC" "$NAME"
	do_start
	;;
   stop|reload|restart|force-reload|status)
	;;
  *)
	echo "Usage: $SCRIPTNAME {start|stop|status|restart|force-reload}" >&2
	exit 3
	;;
esac

:
