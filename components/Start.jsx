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
              BotBone 能從 micro USB 供電，但如果供電電流不夠，比如使用筆電的 USB 埠供電，會導至 BotBone 當機。建議使用能供電 1.5 A 以上的 USB 電源供應器。
              或請透過板上 3.96 接口連接能提供 1.5 A 以上，5.5V 至 36V 的電壓源。
            <h2>步驟二：連結 micro USB 至電腦</h2>
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
