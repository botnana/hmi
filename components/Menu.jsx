/**
 * Copyright 2015, Mapacode Inc.
 * Copyrights licensed under the ISC License. See the accompanying LICENSE file for terms.
 */
'use strict';
var React = require('react');

var Menu = React.createClass({
    render: function() {
        return (
            <div className="pure-menu pure-menu-horizontal pure-menu-open">
                <a href="#" className="pure-menu-heading pure-menu-link">BotBone</a>
                <ul className="pure-menu-list">
                    <li className="pure-menu-item"><a href="#" className="pure-menu-link">Playground</a></li>
                    <li className="pure-menu-item"><a href="#" className="pure-menu-link">Tutorials</a></li>
                    <li className="pure-menu-item"><a href="#" className="pure-menu-link">Reference</a></li>
                    <li className="pure-menu-item"><a href="#" className="pure-menu-link">FAQ</a></li>
                </ul>
            </div>
        );
    }
});

module.exports = Menu;

