/**
 * Copyright 2015, Mapacode Inc.
 * Copyrights licensed under the ISC License. See the accompanying LICENSE file for terms.
 */
'use strict';
var React = require('react');

var tutorials =
    <div>
        <h1>Tutorials</h1>
        <h2>How to setup WiFi</h2>
        <p>
        </p>
        <pre><kbd>
# ifwconfig
        </kbd></pre>
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
}
        </samp></pre>
        <pre><kbd>
# nano /etc/network/interfaces
        </kbd></pre>
        <pre><code>{
"# Wifi\n" +
"auto wlan0\n" +
"iface wlan0 inet dhcp\n" +
"    wpa-ssid network_name\n" +
"    wpa-psk  password"
        }</code></pre>
    </div>;

var Tutorials = React.createClass({
    render: function() {
        return tutorials;
    }
});

module.exports = Tutorials;
