/*
 * Copyright 2015, Mapacode Inc.
 * Copyrights licensed under the ISC License. See the accompanying LICENSE file for terms.
 */

var readBlog = require('../actions/readBlog');

module.exports = {
        home: {
            path: '/',
            method: 'get',
            page: 'home',
            label: 'Home',
            action: function (context, payload, done) {
                context.executeAction(readBlog, {md: ['botbone-getting-started.md', 'botbone-tutorials.md']}, function() {
                    context.dispatch('UPDATE_PAGE_TITLE', { pageTitle: 'Getting Started | BotBone' });
                    done();
                });
            }
        },
        playground: {
            path: '/about',
            method: 'get',
            page: 'about',
            label: 'About',
            action: function (context, payload, done) {
                context.dispatch('UPDATE_PAGE_TITLE', { pageTitle: 'Playground | BotBone ' });
                done();
            }
        },
        dynamicpage: {
            path: '/page/:id',
            method: 'get',
            page: 'page',
            action: function (context, payload, done) {
                context.dispatch('LOAD_PAGE', { id: payload.params.id });
                context.dispatch('UPDATE_PAGE_TITLE', { pageTitle: payload.params.id + ' [Dynamic Page] | botnana-hmi' });
                done();
            }
        }
};
