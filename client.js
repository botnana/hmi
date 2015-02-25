/**
 * Copyright 2015, Mapacode Inc.
 * Copyrights licensed under the ISC License. See the accompanying LICENSE file for terms.
 */
/*global App, document, window */
'use strict';
var React = require('react');
var app = require('./app');

var dehydratedState = window.App; // Sent from the server

window.React = React; // For chrome dev tool support

app.rehydrate(dehydratedState, function (err, context) {
    if (err) {
        throw err;
    }
    window.context = context;
    var mountNode = document.getElementById('app');

    React.withContext(context.getComponentContext(), function () {
        React.render(
            app.getAppComponent()(),
            mountNode
        );
    });

});
