module.exports = {
        home: {
            path: '/',
            method: 'get',
            page: 'home',
            label: 'Home',
            action: function (context, payload, done) {
                context.dispatch('UPDATE_PAGE_TITLE', { pageTitle: 'Home | botnana-hmi' });
                done();
            }
        },
        about: {
            path: '/about',
            method: 'get',
            page: 'about',
            label: 'About',
            action: function (context, payload, done) {
                context.dispatch('UPDATE_PAGE_TITLE', { pageTitle: 'About | botnana-hmi' });
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