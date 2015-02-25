/**
 * Copyright 2015, Mapacode Inc.
 */
'use strict';

module.exports = function (context, payload, done) {
    context.service.read('blog', payload, {}, function (err, posts) {
        if (err) {
            done();
            return;
        }
        context.dispatch('RECEIVE_POSTS_SUCCESS', posts);
        done();
    });
};
