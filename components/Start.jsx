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
        return {html: this.getStore(PostStore).getAll()['botbone-getting-started.md']};
    },
    _onChange: function() {
        this.setState(this.getState());
    },
    componentDidMount: function () {
        var editor;
        var editors = this.getDOMNode().querySelectorAll('.editor');
        for (var i = 0; i < editors.length; ++i) {
            editor = ace.edit(editors[i]);
            editor.setTheme("ace/theme/twilight");
            if(editors[i].className.indexOf("forth") >= 0) {
                editor.getSession().setMode("ace/mode/forth");
            } else if(editors[i].className.indexOf("javascript") >= 0) {
                editor.getSession().setMode("ace/mode/javascript");
            }
        }
    },
    render: function() {
        return (
            <div dangerouslySetInnerHTML={{__html: this.state.html}}>
            </div>
        );
    }
});

module.exports = Start;
