/*
 * Copyright 2015, Mapacode Inc.
 * Copyrights licensed under the ISC License. See the accompanying LICENSE file for terms.
 */

var showPosts = require('botnana-blog-view/actions/showPosts');

module.exports = {
        home: {
            path: '/',
            method: 'get',
            page: 'home',
            label: 'Getting Started',
            action: function (context, payload, done) {
                context.executeAction(showPosts, {md: ['botbone-getting-started.md', 'botbone-tutorials.md']}, function() {
                    context.dispatch('UPDATE_PAGE_TITLE', { pageTitle: 'Getting Started | BotBone' });
                    done();
                });
            }
        },
        tutorials: {
            path: '/tutorials',
            method: 'get',
            page: 'tutorials',
            label: 'Tutorials',
            action: function (context, payload, done) {
                context.dispatch('UPDATE_PAGE_TITLE', { pageTitle: 'Tutorials | BotBone ' });
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
