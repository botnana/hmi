/**
 * Copyright 2015, Mapacode Inc.
 * Copyrights licensed under the ISC License. See the accompanying LICENSE file for terms.
 */
'use strict';
var React = require('react');
var PostStore = require('../stores/PostStore');
var FluxibleMixin = require('fluxible').Mixin;

var Start = React.createClass({
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
        return this.getStore(PostStore).getAll();
    },
    _onChange: function() {
        this.setState(this.getState());
    },
    render: function() {
        return (
            <div dangerouslySetInnerHTML={{__html: this.state.posts[0]}}>
            </div>
        );
    }
});

module.exports = Start;
