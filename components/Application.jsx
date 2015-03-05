/**
 * Copyright 2015, Mapacode Inc.
 * Copyrights licensed under the ISC License. See the accompanying LICENSE file for terms.
 */
'use strict';
var React = require('react');
var Start = require('./Start.jsx');
var Control = require('./Control.jsx');
var Tutorials = require('./Tutorials.jsx');
var Nav = require('./Nav.jsx');
var RouterMixin = require('flux-router-component').RouterMixin;
var FluxibleMixin = require('fluxible').Mixin;
var ApplicationStore = require('../stores/ApplicationStore');

var Application = React.createClass({
    mixins: [RouterMixin, FluxibleMixin],
    statics: {
        storeListeners: [ApplicationStore]
    },
    getInitialState: function () {
        return this.getStore(ApplicationStore).getState();
    },
    onChange: function () {
        var state = this.getStore(ApplicationStore).getState();
        this.setState(state);
    },
    render: function() {
        var output = '';
        switch(this.state.currentPageName) {
            case 'home':
                output =
                    <div className="pure-g">
                        <div className="pure-u-1-2">
                            <Start />
                        </div>
                        <div  className="pure-u-1-2">
                            <Control/>
                        </div>
                    </div>
                break;
            case 'tutorials':
                output = <Tutorials />
                break;
        }
        return (
            <div>
                <Nav selected={this.state.currentPageName} links={this.state.pages} />
                {output}
            </div>
        );
    },
    componentDidUpdate: function(prevProps, prevState) {
        var newState = this.state;
        if (newState.pageTitle === prevState.pageTitle) {
            return;
        }
        document.title = newState.pageTitle;
    }
});

module.exports = Application;
