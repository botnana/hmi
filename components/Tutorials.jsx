/**
 * Copyright 2015, Mapacode Inc.
 * Copyrights licensed under the ISC License. See the accompanying LICENSE file for terms.
 */
'use strict';
var React = require('react');

var tutorials = {
    'zh':
        <div>
            <h1>使用指南</h1>
            <div>
                <h2>如何更新至最新版的人機界面</h2>
                <pre><kbd>{
                    "git clone ..."
                }</kbd></pre>
            </div>
            <div>
                <h2>設何設定 USB gadget</h2>
                <pre><kbd>{
                    "# apt-get install udhcpd\n" +
                    "# nano /etc/network/interface"
                }</kbd></pre>
                <pre><kbd>{
                    "# Ethernet/RNDIS gadget (g_ether)\n" +
                    "# ... or on host side, usbnet and random hwaddr\n" +
                    "iface usb0 inet static\n" +
                    "    address 192.168.7.2\n" +
                    "    netmask 255.255.255.0\n" +
                    "    network 192.168.7.0\n" +
                    "    gateway 192.168.7.1"
                }</kbd></pre>
                <pre><kbd>{
                    "wget -c https://www.botnana.org/downloads/botbone-g-ether-load.sh\n" +
                    "chmod +x botbone-g-ether-load.sh\n" +
                    "sudo ./botbone-g-ether-load.sh"
                }</kbd></pre>
            </div>
            <h2>如何設定 WiFi</h2>
            <div>
                <pre><kbd>{
                    "# ifwconfig"
                }</kbd></pre>
                <pre><samp>{
                    "wlan0     IEEE 802.11bgn  ESSID:off/any\n" +
                    "          Mode:Managed  Access Point: Not-Associated   Tx-Power=0 dBm\n" +
                    "          Retry short limit:7   RTS thr=2347 B   Fragment thr:off\n" +
                    "          Encryption key:off\n" +
                    "          Power Management:on\n" +
                    "\n" +
                    "lo        no wireless extensions.\n" +
                    "\n" +
                    "eth0      no wireless extensions.\n" +
                    "\n" +
                    "rename3   no wireless extensions.\n"
                }</samp></pre>
                <pre><kbd>{
                    "# nano /etc/network/interfaces"
                }</kbd></pre>
                <pre><code>{
                    "# Wifi\n" +
                    "auto wlan0\n" +
                    "iface wlan0 inet dhcp\n" +
                    "    wpa-ssid network_name\n" +
                    "    wpa-psk  password"
                }</code></pre>
                <pre><kbd>{
                    "# ifup wlan0"
                }</kbd></pre>
                <pre><samp>{
                    "Internet Systems Consortium DHCP Client 4.2.2\n" +
                    "Copyright 2004-2011 Internet Systems Consortium.\n" +
                    "All rights reserved.\n" +
                    "For info, please visit https://www.isc.org/software/dhcp/\n" +
                    "\n" +
                    "Listening on LPF/wlan0/80:1f:02:ab:21:09\n" +
                    "Sending on   LPF/wlan0/80:1f:02:ab:21:09\n" +
                    "Sending on   Socket/fallback\n" +
                    "DHCPDISCOVER on wlan0 to 255.255.255.255 port 67 interval 4\n" +
                    "DHCPDISCOVER on wlan0 to 255.255.255.255 port 67 interval 7\n" +
                    "DHCPDISCOVER on wlan0 to 255.255.255.255 port 67 interval 9\n" +
                    "DHCPDISCOVER on wlan0 to 255.255.255.255 port 67 interval 10\n" +
                    "DHCPDISCOVER on wlan0 to 255.255.255.255 port 67 interval 13\n" +
                    "DHCPREQUEST on wlan0 to 255.255.255.255 port 67\n" +
                    "DHCPOFFER from 172.20.10.1\n" +
                    "DHCPACK from 172.20.10.1\n" +
                    "bound to 172.20.10.11 -- renewal in 38630 seconds."
                }</samp></pre>
            </div>
            <div>
                <h2>如何讓 nodejs 伺服器使用 port 80</h2>
                <p>參考
                    <a href="http://stackoverflow.com/questions/16573668/best-practices-when-running-node-js-with-port-80-ubuntu-linode">
                        Best practices when running nodejs with port 80
                    </a>
                    。使用 iptables 將 micro USB 的 port 80 導向至 port 3000。
                </p>
                <pre><kbd>{
                "# iptables -t nat -A PREROUTING -i usb0 -p tcp --dport 80 -j REDIRECT --to-port 3000"
                }</kbd></pre>
            </div>
        </div>
};

var Tutorials = React.createClass({
    render: function() {
        return tutorials['zh'];
    }
});

module.exports = Tutorials;
