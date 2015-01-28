/**
 * Copyright 2015, Mapacode Inc.
 * Copyrights licensed under the ISC License. See the accompanying LICENSE file for terms.
 */
/*global App, document, window */
'use strict';
var React = require('react');
var debug = require('debug');
var bootstrapDebug = debug('Example');
var app = require('./app');
require("./node_modules/purecss/pure-min.css");
require("./node_modules/purecss/grids-responsive-min.css");

var dehydratedState = window.App; // Sent from the server

window.React = React; // For chrome dev tool support
debug.enable('*');

bootstrapDebug('rehydrating app');
app.rehydrate(dehydratedState, function (err, context) {
    if (err) {
        throw err;
    }
    window.context = context;
    var mountNode = document.getElementById('app');

    bootstrapDebug('React Rendering');
    React.render(app.getAppComponent()({
        context: context.getComponentContext()
    }), mountNode, function () {
        bootstrapDebug('React Rendered');
    });
});
