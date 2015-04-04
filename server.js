/**
* Copyright 2015, Mapacode Inc.
* Copyrights licensed under the ISC License. See the accompanying LICENSE file for terms.
*/
'use strict';
require('node-jsx').install({ extension: '.jsx' });
var express = require('express');
var serialize = require('serialize-javascript');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var csrf = require('csurf');
var navigateAction = require('flux-router-component').navigateAction;
var debug = require('debug')('Example');
var React = require('react');
var app = require('./app');
var HtmlComponent = React.createFactory(require('./components/Html.jsx'));

var server = express();

server.use('/public', express.static(__dirname + '/build'));
server.use('/assets', express.static(__dirname + '/assets'));

var fetchrPlugin = app.getPlugin('FetchrPlugin');
fetchrPlugin.registerService(require('botnana-blog-service')(__dirname + '/posts/zh-Hant/'));
server.use(fetchrPlugin.getXhrPath(), fetchrPlugin.getMiddleware());

server.use(cookieParser());
server.use(bodyParser.json());
server.use(csrf({cookie: true}));

server.use(function (req, res, next) {
    var context = app.createContext({
        blogPath: '/page',
        req: req, // The fetchr plugin depends on this
        xhrContext: {
            _csrf: req.csrfToken() // Make sure all XHR requests have the CSRF token
        }
    });

    debug('Executing navigate action');
    context.executeAction(navigateAction, {
        url: req.url
    }, function (err) {
        if (err) {
            console.log(err)
            console.log(req.url);
            if (err.status && err.status === 404) {
                next();
            } else {
                next(err);
            }
            return;
        }
        debug('Exposing context state');
        var exposed = 'window.App=' + serialize(app.dehydrate(context)) + ';';
        debug('Rendering Application component into html');
        var Component = app.getComponent();

        var html = React.renderToStaticMarkup(HtmlComponent({
            state: exposed,
            markup: React.renderToString(Component({context:context.getComponentContext()})),
            context: context.getComponentContext()
        }));

        res.send(html);

    });
});

var port = process.env.PORT || 3000;
server.listen(port);
console.log('Listening on port ' + port);

