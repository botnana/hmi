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
              BotBone 為一款動程科技 (Mapacode Inc.) 針對工業教育以及工業自動化開發，
              由麗臺科技 (Leadtek Research Inc.) 製造行銷的工業以太網開發平台，在設計上它和樹莓派 Model B+ 的腳位相容。
              方便學生及工程師整合樹莓派的各種子板。
              線路設計則以 BeagleBone Black 為基礎。
              但具有 2 組 RJ45， 內建基本的工業以太網／工業物聯網軟體、工業控制軟體、
              互動式網頁人機界面軟體，
              方便研發人員或學生實驗各種工業控制、工業以太網／工業物聯網的構想。
            </p>
            <h2>步驟一：接上電源</h2>
              BotBone 能從 micro USB 供電，但如果供電電流不夠，會導至 BotBone 當機。因此若有當機現象，
              請透過板上 3.96 接口連接能提供 1.5 A 的電源。
              BotBone 內建直流電壓轉換電路，能接受 5.5V 至 36V 的電壓。
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
