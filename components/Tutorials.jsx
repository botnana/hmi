/**
 * Copyright 2015, Mapacode Inc.
 * Copyrights licensed under the ISC License. See the accompanying LICENSE file for terms.
 */
'use strict';
var React = require('react');
var PostStore = require('../stores/PostStore');
var FluxibleMixin = require('fluxible').Mixin;

var Tutorials = React.createClass({
    mixins: [FluxibleMixin],
    statics: {
        storeListeners: {
            _onChange: [PostStore]
        }
    },
    getInitialState: function () {
        return this.getState();
    },
    getState: function () {
        return {html: this.getStore(PostStore).getAll()['botbone-tutorials.md']};
    },
    _onChange: function() {
        this.setState(this.getState());
    },
    render: function() {
        return  (
            <div dangerouslySetInnerHTML={{__html: this.state.html}}>
            </div>
        );
    }
});

module.exports = Tutorials;
