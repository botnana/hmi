/**
 * Copyright 2015, Mapacode Inc.
 * Copyrights licensed under the ISC License. See the accompanying LICENSE file for terms.
 */
'use strict';
var React = require('react');
var Canvas = require('./Canvas.jsx');
var Application = React.createClass({
    render: function() {
        return (
            <div>
                <h1>Botnana HMI</h1>
                <Canvas />
            </div>
        );
    }
});

module.exports = Application;
