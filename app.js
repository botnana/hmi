/**
* Copyright 2015, Mapacode Inc.
* Copyrights licensed under the ISC License. See the accompanying LICENSE file for terms.
*/
'use strict';
var React = require('react');
var FluxibleApp = require('fluxible');
var routrPlugin = require('fluxible-plugin-routr');
var app = new FluxibleApp({
    appComponent: React.createFactory(require('./components/Application.jsx'))
});
app.plug(routrPlugin({
    routes: require('./configs/routes')
}));
app.registerStore(require('./stores/ApplicationStore'));
module.exports = app;
