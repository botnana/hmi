/**
 * Copyright 2015, Mapacode Inc.
 * Copyrights licensed under the ISC License. See the accompanying LICENSE file for terms.
 */
'use strict';
var React = require('react');

var Canvas = React.createClass({
    componentDidMount: function () {
        var svg = d3.select(this.getDOMNode());
// 相片的大小於 (1552,2104), SVG 設為其 1/8。
        svg
        .attr('width', '224').attr('height', '255')
        .append('image').attr('xlink:href', '/public/img/botbone.png')
        .attr('y', '0').attr('x', '0')
        .attr('width', '224').attr('height', '255');

        // Dark background under reactive components.
        svg
        .append('rect').attr({
            'width': '224', 'height': '255', 'fill':'#000000', 'fill-opacity':'0.25',
        });

        var render_digital_pin = function(item, config) {
            var g = svg.append('g').attr('id', item[0]['tag']);
            if(item[0]['type']!=='power') {
                g
                .append('rect').attr({
                    'width': config['rect-width'], 'height': config['rect-height'], 'fill':'#ffffff', 'fill-opacity':'1',
                    'transform':'translate('+item[1]+','+item[2]+')'
                });
            }
            g
            .append('text').attr({
                'text-anchor': config['text-anchor'],
                'font-size':config['font-size'], 'font-family':'Bitstream Vera Sans', 'fill':'#ffffff', 'fill-opacity':'1',
                'transform':'translate('+(item[1]+config['text-dxy'][0])+','+(item[2]+config['text-dxy'][1])+')'
            })
            .append('tspan').text(item[0]['signal']);
        };

        var render_analog_pin = function(item, config) {
            var g = svg.append('g').attr('id', item[0]['tag']);
            g
            .append('rect').attr({
                'width': config['rect-width'], 'height': config['rect-height'], 'fill':'#ffffff', 'fill-opacity':'1',
                'transform':'translate('+item[1]+','+item[2]+')'
            });
            g
            .append('rect').attr({
                'width': config['rect-width']*10, 'height': config['rect-height'],
                'fill':'#000000', 'fill-opacity':'0.2',
                'transform':'translate('
                    + (item[1]+config['text-dxy'][0]-(config['text-anchor']==='end' ? config['rect-width']*10 : 0))
                    +','+(item[2]+config['text-dxy'][1]-config['rect-height'])+')'
            });
            g
            .append('text').attr({
                'text-anchor': config['text-anchor'],
                'font-size':config['font-size'], 'font-family':'Bitstream Vera Sans', 'fill':'#ffffff', 'fill-opacity':'1',
                'transform':'translate('+(item[1]+config['text-dxy'][0])+','+(item[2]+config['text-dxy'][1])+')'
            })
            .append('tspan').text(item[0]['signal']);
            g
            .append('rect').attr({
                'width': config['rect-width']*5, 'height': config['rect-height'],
                'fill':'#00ff00', 'fill-opacity':'0.5',
                'transform':'translate('
                    +(item[1]+config['text-dxy'][0]-(config['text-anchor']==='end' ? config['rect-width']*5 : 0))
                    +','+(item[2]+config['text-dxy'][1]-config['rect-height'])+')'
            });
        };

        var small_anchored_list_start = {
            'text-anchor': 'start',
            'font-size': '4px',
            'rect-width': 2.75,
            'rect-height': 1.8,
            'text-dxy': [4.75, 1.8],
            'bar-dxy': [0, 0]
        };
        var large_anchored_list_start = {
            'text-anchor': 'start',
            'font-size': '6px',
            'rect-width': 3.75,
            'rect-height': 3.8,
            'text-dxy': [4.75, 3.8],
            'bar-dxy': [0, 0]
        };
        var large_anchored_list_end = {
            'text-anchor': 'end',
            'font-size': '6px',
            'rect-width': 3.75,
            'rect-height': 3.8,
            'text-dxy': [4.75-6, 3.8],
            'bar-dxy': [0, 0]
        };

        // LEDs
        [
            {signal: 'USR0', tag: 'usr0'},
            {signal: 'USR1', tag: 'usr1'},
            {signal: 'USR2', tag: 'usr2'},
            {signal: 'USR3', tag: 'usr3'}
        ]
        .map(function(x, i) {
            return [x, 173.875, 183-i*3.75];
        })
        .forEach(function(x) { render_digital_pin (x, small_anchored_list_start); });

        // Digital pins
        [
            {signal: '24V',         tag: 'j15.2', type: 'power'},
            {signal: '24V',         tag: 'j15.4', type: 'power'},
            {signal: '24V',         tag: 'j15.6', type: 'power'},
            {signal: 'DGND',        tag: 'j15.8', type: 'power'},
            {signal: 'PWR_BUT',     tag: 'j15.10'},
            {signal: 'SYS_RESETn',  tag: 'j15.12'},
            {signal: 'CLKOUT2',     tag: 'j15.14'},
            {signal: 'GPIO3_7',     tag: 'j15.16'},
            {signal: 'GPIO3_8',     tag: 'j15.18'},
            {signal: 'DGND',        tag: 'j15.20', type: 'power'}
        ]
        .map(function(x, i) {
            return [x, 133-i*0.075, 85+i*6.55];
        }).forEach(function (x) { render_digital_pin (x, large_anchored_list_start); });

        [
            {signal: '24V',         tag: 'j15.1', type: 'power'},
            {signal: '24V',         tag: 'j15.3', type: 'power'},
            {signal: '24V',         tag: 'j15.5', type: 'power'},
            {signal: '24V',         tag: 'j15.7', type: 'power'},
            {signal: 'DGND',        tag: 'j15.9', type: 'power'},
            {signal: 'eQEP2A_in',   tag: 'j15.11'},
            {signal: 'eQEP2B_in',   tag: 'j15.13'},
            {signal: 'eQEP2_index', tag: 'j15.15'},
            {signal: 'DGND',        tag: 'j15.17', type: 'power'}
        ]
        .map (function(x, i) {
            return [x, 126.5-i*0.075, 85+i*6.55];
        }).forEach(function (x) { render_digital_pin (x, large_anchored_list_end); });

        [
            {signal: 'SYS_5V',      tag: 'j14.2', type: 'power'},
            {signal: 'SYS_5V',      tag: 'j14.4', type: 'power'},
            {signal: 'DGND',        tag: 'j14.6', type: 'power'},
            {signal: 'UART1_TXD',   tag: 'j14.8'},
            {signal: 'UART1_RXD',   tag: 'j14.10'},
            {signal: 'EHRPWM2A',    tag: 'j14.12'},
            {signal: 'DGND',        tag: 'j14.14', type: 'power'},
            {signal: 'EHRPWM2B',    tag: 'j14.16'},
            {signal: 'GPIO0_26',    tag: 'j14.18'},
            {signal: 'DGND',        tag: 'j14.20', type: 'power'},
            {signal: 'GPIO0_27',    tag: 'j14.22'},
            {signal: 'SPI1_CS0',    tag: 'j14.24'},
            {signal: 'SPI1_CS1',    tag: 'j14.26'},
            {signal: 'I2C0_SCL',    tag: 'j14.28'},
            {signal: 'DGND',        tag: 'j14.30', type: 'power'},
            {signal: 'GPIO3_16',    tag: 'j14.32'},
            {signal: 'DGND',        tag: 'j14.34', type: 'power'},
            {signal: 'SPI0_CS0',    tag: 'j14.36'},
            {signal: 'SPI0_D1',     tag: 'j14.38'},
            {signal: 'SPI0_SCLK',   tag: 'j14.40'}
        ].map(function(x, i) {
            return [x, 45.875-i*0.070, 84.5+i*6.57];
        }).forEach(function (x) { render_digital_pin (x, large_anchored_list_start); });

        [
            {signal: 'VDD_3V3B',    tag: 'j14.1', type: 'power'},
            {signal: 'I2C2_SDA',    tag: 'j14.3'},
            {signal: 'I2C2_SCL',    tag: 'j14.5'},
            {signal: 'TIMER4',      tag: 'j14.7'},
            {signal: 'DGND',        tag: 'j14.9', type: 'power'},
            {signal: 'eQEP0A_in',   tag: 'j14.11'},
            {signal: 'eQEP0B_in',   tag: 'j14.13'},
            {signal: 'eQEP0_index', tag: 'j14.15'},
            {signal: 'VDD_3V3B',    tag: 'j14.17', type: 'power'},
            {signal: 'SPI1_D1',     tag: 'j14.19'},
            {signal: 'SPI1_D0',     tag: 'j14.21'},
            {signal: 'SPI1_SCLK',   tag: 'j14.23'},
            {signal: 'DGND',        tag: 'j14.25', type: 'power'},
            {signal: 'I2C0_SDA',    tag: 'j14.27'},
            {signal: 'TIMER6',      tag: 'j14.29'},
            {signal: 'TIMER7',      tag: 'j14.31'},
            {signal: 'GPIO1_15',    tag: 'j14.33'},
            {signal: 'SPI0_D0',     tag: 'j14.35'},
            {signal: 'GPIO3_21',    tag: 'j14.37'},
            {signal: 'DGND',        tag: 'j14.39', type: 'power'}
        ].map(function(x, i) {
            return [x, 40-i*0.070, 84.5+i*6.57];
        }).forEach(function (x) { render_digital_pin (x, large_anchored_list_end); });

        // Analog inputs
        [
            {signal: 'AIN4', tag: 'j15.22'},
            {signal: 'AIN5', tag: 'j15.24'},
            {signal: 'AIN6', tag: 'j15.26'}
        ]
        .map (function (x, i) {
            return [x, 132.375-i*0.075, 151+i*6.55];
        }).forEach(function (x) { render_analog_pin (x, large_anchored_list_start); });
        [
            {signal: 'AIN0', tag: 'j15.19'},
            {signal: 'AIN1', tag: 'j15.21'},
            {signal: 'AIN2', tag: 'j15.23'},
            {signal: 'AIN3', tag: 'j15.25'}
        ]
        .map (function (x, i) {
            return [x, 126-i*0.075, 144.25+i*6.55];
        }).forEach(function (x) { render_analog_pin (x, large_anchored_list_end); });
    },
    render: function() {
        return (
            <svg id="control"></svg>
        );
    }
});

module.exports = Canvas;
