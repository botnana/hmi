/**
 * Copyright 2015, Mapacode Inc.
 * Copyrights licensed under the ISC License. See the accompanying LICENSE file for terms.
 */
'use strict';
var React = require('react');

var guide = {
    'en': <div>
            <h1>Getting Started with BotBone</h1>
            <p></p>
          </div>,
    'zh': <div>
            <h1>BotBone 入門</h1>
            <p>
                BotBone 帶你進自動化及工業 4.0 的世界，你可以透過它學到
                <ul>
                    <li>實時作業系統 RTOS</li>
                    <li>互動式網頁人機界面 Web-based HMI</li>
                    <li>資料採集與監控系統 SCADA</li>
                    <li>工業以太網 Industry Ethernet</li>
                    <li>工業物聯網 IIot</li>
                    <li>雲端垂直整合</li>
                </ul>
              由動程科技 (Mapacode Inc.) 設計，麗臺科技 (Leadtek Research Inc.) 製造行銷，
              內建工業控制平台 Botnana OS，並和樹莓派 Model B+ 的腳位相容。
              方便學生及工程師整合樹莓派子板，實驗各種工業控制、工業以太網／工業物聯網的構想。
            </p>
            <h2>步驟一：接上電源</h2>
                <p>透過板上 3.96 接口連接 5.5V 至 36V 的電源供應器。電源供應器應能提供 1.5 A 以上電流。</p>
                <p>註：BotBone 也支援使用大於 1.5A 的 USB 電源供應器供電從 micro USB 接口供電，好處是 USB 電源供應器隨手可得，
                但如此作法有以下兩個缺點。</p>
                    <ul>
                        <li>如果使用筆電的 USB 埠或 USB Hub 供電，常會因為供電電流不足導至無法開機。</li>
                        <li>佔用 micro USB 接口，導至無法使用 micro USB 連結電腦。</li>
                    </ul>
                <p>本入門使用 3.96 接口供電。</p>
            <h2>步驟二：連結至電腦</h2>
                <ul>
                    <li>使用 UART 連結電腦</li>
                    <li>使用 micro USB 連結電腦</li>
                </ul>
                <h3>使用 UART 連結電腦</h3>
                <p>當出現 login 提示時，輸入 root。出現 password 提示時，按 enter。</p>
                <pre><kbd>{
                    "arm login: root\n" +
                    "Passowrd: "
                }</kbd></pre>
                <pre><kbd>{
                    "# apt-get update\n" +
                    "# apt-get install nodejs-legacy\n" +
                    "# apt-get install npm\n" +
                    "# npm install -g grunt-cli\n" +
                    "# apt-get install git\n"
                }</kbd></pre>
                <h3>使用 micro USB 連結電腦</h3>
            <h2>步驟三：安裝驅動程式</h2>
            <h2>步驟四：瀏覽 BotBone</h2>
          </div>
};

var Start = React.createClass({
    render: function() {
        return (
            <div>
                {guide['zh']}
            </div>
        );
    }
});

module.exports = Start;
