/**
 * Copyright 2015, Mapacode Inc.
 * Copyrights licensed under the ISC License. See the accompanying LICENSE file for terms.
 */
'use strict';
var React = require('react');
var BlogStore = require('botnana-blog-view/stores/BlogStore');
var FluxibleMixin = require('fluxible').Mixin;

var Start = React.createClass({
    mixins: [FluxibleMixin],
    statics: {
        storeListeners: [BlogStore]
    },
    getInitialState: function () {
        return this.getState();
    },
    getState: function () {
        return {html: this.getStore(BlogStore).getPosts().posts['botbone-getting-started.md'].content};
    },
    onChange: function() {
        this.setState(this.getState());
    },
    handleMsl: function(event) {
        event.preventDefault();
        console.log('handleMsl');
    },
    handleJavascript: function(event) {
        event.preventDefault();
        console.log('handleJavascript');
    },
    componentDidMount: function () {
        var node = this.getDOMNode();
        var editor, button;
        var i;
        var forms = node.querySelectorAll('form.msl, form.javascript');
        console.log(forms);
        for (i = 0; i < forms.length; ++i) {
            editor = ace.edit(forms[i].querySelector('pre.editor'));
            editor.setTheme("ace/theme/twilight");
            button = forms[i].querySelector('button');
            if(forms[i].classList.contains("msl")) {
                editor.getSession().setMode("ace/mode/forth");
                button.addEventListener("click", this.handleMsl, false);
            } else if(forms[i].classList.contains("javascript")) {
                editor.getSession().setMode("ace/mode/javascript");
                button.addEventListener("click", this.handleJavascript, false);
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
