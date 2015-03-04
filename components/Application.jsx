/**
 * Copyright 2015, Mapacode Inc.
 * Copyrights licensed under the ISC License. See the accompanying LICENSE file for terms.
 */
'use strict';
var React = require('react');
var Start = require('./Start.jsx');
var Control = require('./Control.jsx');
var Tutorials = require('./Tutorials.jsx');
var Menu = require('./Menu.jsx');
var Application = React.createClass({
    render: function() {
        return (
            <div>
                <Menu />
                <div className="pure-g">
                    <div className="pure-u-1-2">
                        <Start />
                    </div>
                    <div  className="pure-u-1-2">
                        <Control/>
                        <Tutorials />
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Application;
