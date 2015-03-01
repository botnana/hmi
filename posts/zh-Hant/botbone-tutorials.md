# BotBone 教學

## 如何更新至最新版的人機界面
    git clone ...

## 設何設定 USB gadget

先安裝 udhcpd。

    # apt-get install udhcpd

修改 /etc/network/interface。
    # nano /etc/network/interface

增加以下內容至 /etc/network/interface。

    # Ethernet/RNDIS gadget (g_ether)
    # ... or on host side, usbnet and random hwaddr
    iface usb0 inet static
        address 192.168.7.2
        netmask 255.255.255.0
        network 192.168.7.0
        gateway 192.168.7.1

以 script botbone-g-ether-load.sh 啟動 usb0 及 udhcpd。

    wget -c https://www.botnana.org/downloads/botbone-g-ether-load.sh
    chmod +x botbone-g-ether-load.sh
    sudo ./botbone-g-ether-load.sh

## 如何設定 WiFi

執行 iwconfig，確定有 wlan0。

    # ifwconfig

    wlan0     IEEE 802.11bgn  ESSID:off/any
              Mode:Managed  Access Point: Not-Associated   Tx-Power=0 dBm
              Retry short limit:7   RTS thr=2347 B   Fragment thr:off
              Encryption key:off
              Power Management:on
     
    lo        no wireless extensions.
     
    eth0      no wireless extensions.
     
    rename3   no wireless extensions.

修改 /etc/network/interface 如下，network_name 及 password 分別為無線網路的名稱及密碼：

    # nano /etc/network/interfaces

    # Wifi
    auto wlan0
    iface wlan0 inet dhcp
        wpa-ssid network_name
        wpa-psk  password

執行 ifup wlan0 以連結無線網路。

    # ifup wlan0

    Internet Systems Consortium DHCP Client 4.2.2
    Copyright 2004-2011 Internet Systems Consortium.
    All rights reserved.
    For info, please visit https://www.isc.org/software/dhcp/
     
    Listening on LPF/wlan0/80:1f:02:ab:21:09
    Sending on   LPF/wlan0/80:1f:02:ab:21:09
    Sending on   Socket/fallback
    DHCPDISCOVER on wlan0 to 255.255.255.255 port 67 interval 4
    DHCPDISCOVER on wlan0 to 255.255.255.255 port 67 interval 7
    DHCPDISCOVER on wlan0 to 255.255.255.255 port 67 interval 9
    DHCPDISCOVER on wlan0 to 255.255.255.255 port 67 interval 10
    DHCPDISCOVER on wlan0 to 255.255.255.255 port 67 interval 13
    DHCPREQUEST on wlan0 to 255.255.255.255 port 67
    DHCPOFFER from 172.20.10.1
    DHCPACK from 172.20.10.1
    bound to 172.20.10.11 -- renewal in 38630 seconds.

對網路進行最佳化，參考 [Debian reference](https://www.debian.org/doc/manuals/debian-reference/index.en.html) 的 [5.8](https://www.debian.org/doc/manuals/debian-reference/ch05.en.html#_network_optimization) 節。

## 如何讓 nodejs 伺服器使用 port 80

參考 [Best practices when running nodejs with port 80](http://stackoverflow.com/questions/16573668/best-practices-when-running-node-js-with-port-80-ubuntu-linode)
。使用 iptables 將 micro USB 的 port 80 導向至 port 3000。

    # iptables -t nat -A PREROUTING -i usb0 -p tcp --dport 80 -j REDIRECT --to-port 3000
