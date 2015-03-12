/**
* Copyright 2015, Mapacode Inc.
* Copyrights licensed under the ISC License. See the accompanying LICENSE file for terms.
*/
'use strict';
var React = require('react');
var FluxibleApp = require('fluxible');
var routrPlugin = require('fluxible-plugin-routr');
var fetchrPlugin = require('fluxible-plugin-fetchr');
var blogPlugin = require('botnana-blog-view');

var app = new FluxibleApp({
    component: React.createFactory(require('./components/Application.jsx'))
});

app.plug(routrPlugin({
    routes: require('./configs/routes')
}));

app.plug(blogPlugin);

app.registerStore(require('./stores/ApplicationStore'));
app.registerStore(require('botnana-blog-view/stores/BlogStore'));

app.plug(fetchrPlugin({
    xhrPath: '/api'
}));

module.exports = app;
