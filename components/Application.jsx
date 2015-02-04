/**
 * Copyright 2015, Mapacode Inc.
 * Copyrights licensed under the ISC License. See the accompanying LICENSE file for terms.
 */
'use strict';
var React = require('react');
var Start = require('./Start.jsx');
var Control = require('./Control.jsx');
var Application = React.createClass({
    render: function() {
        return (
            <div className="pure-g">
                <div  className="pure-u-1-3">
                    <Control />
                </div>
                <div className="pure-u-2-3">
                    <Start />
                </div>
            </div>
        );
    }
});

module.exports = Application;
