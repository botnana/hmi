/**
 * Copyright 2015, Mapacode Inc.
 * Copyrights licensed under the ISC License. See the accompanying LICENSE file for terms.
 */
'use strict';
var React = require('react');
var Control = require('./Control.jsx');
var Application = React.createClass({
    render: function() {
        return (
            <div>
                <h1>Botnana HMI</h1>
                <Control />
            </div>
        );
    }
});

module.exports = Application;
