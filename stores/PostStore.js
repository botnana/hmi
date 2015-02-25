/**
 * Copyright 2015, Mapacode Inc.
 * Copyrights licensed under the ISC License. See the accompanying LICENSE file for terms.
 */
'use strict';

var createStore = require('fluxible/utils/createStore');

module.exports = createStore({
    storeName: 'postStore',
    handlers: {
        'RECEIVE_POSTS_SUCCESS': '_receivePosts',
    },
    initialize: function () {
        this.posts = {posts: []};
    },
    _receivePosts: function (posts) {
        this.posts = {posts: posts};
        this.emitChange();
    },
    getAll: function () {
        return this.posts;
    },
    dehydrate: function () {
        return {
            posts: this.posts
        };
    },
    rehydrate: function (state) {
        this.posts = state.posts;
    }
});
