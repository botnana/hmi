/**
* Copyright 2015, Mapacode Inc.
* Copyrights licensed under the ISC License. See the accompanying LICENSE file for terms.
*/
'use strict';
var React = require('react');
var FluxibleApp = require('fluxible');
var routrPlugin = require('fluxible-plugin-routr');
var fetchrPlugin = require('fluxible-plugin-fetchr');

var app = new FluxibleApp({
    appComponent: React.createFactory(require('./components/Application.jsx'))
});

app.plug(routrPlugin({
    routes: require('./configs/routes')
}));

app.registerStore(require('./stores/ApplicationStore'));
app.registerStore(require('./stores/PostStore'));

app.plug(fetchrPlugin({
    xhrPath: '/api'
}));

module.exports = app;
