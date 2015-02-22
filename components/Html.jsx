/**
* Copyright 2015, Mapacode Inc.
* Copyrights licensed under the ISC License. See the accompanying LICENSE file for terms.
*/
'use strict';
var React = require('react');
var ApplicationStore = require('../stores/ApplicationStore');
/**
* React class to handle the rendering of the HTML head section
*
* @class Head
* @constructor
*/

var Html = React.createClass({
    /**
    * Refer to React documentation render
    *
    * @method render
    * @return {Object} HTML head section
    */
    render: function() {
        return (
            <html>
                <head>
                    <meta charSet="utf-8" />
                    <title>{this.props.context.getStore(ApplicationStore).getPageTitle()}</title>
                    <meta name="viewport" content="width=device-width, user-scalable=no" />
                    <link rel="stylesheet" href="/public/pure-min.css" />
                    <link rel="stylesheet" href="/public/grids-responsive-min.css" />
                    <link rel="stylesheet" href="/public/assets/control.css" />
                </head>
                <body>
                    <div id="app" dangerouslySetInnerHTML={{__html: this.props.markup}}></div>
                </body>
                <script dangerouslySetInnerHTML={{__html: this.props.state}}></script>
                <script src="/public/js/d3.min.js" defer></script>
                <script src="/public/js/client.js" defer></script>
            </html>
        );
    }
});

module.exports = Html;
