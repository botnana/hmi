/**
 * Copyright 2015, Mapacode Inc.
 * Copyrights licensed under the ISC License. See the accompanying LICENSE file for terms.
 */
'use strict';
var React = require('react');

var Canvas = React.createClass({
    componentDidMount: function () {
        var n = this.getDOMNode();
        d3.select(n).append('svg');
    },
    render: function() {
        return (
            <div id="canvas"></div>
        );
    }
});

module.exports = Canvas;
