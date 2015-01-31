/**
 * Copyright 2015, Mapacode Inc.
 * Copyrights licensed under the ISC License. See the accompanying LICENSE file for terms.
 */
'use strict';
var React = require('react');

var Canvas = React.createClass({
    componentDidMount: function () {
        var n = this.getDOMNode();
// 相片的大小於 (1552,2104), SVG 設為其 1/8。
        d3.select(n)
        .append('svg').attr('width', '224').attr('height', '255')
        .append('g')
        .append('image').attr('xlink:href', '/public/img/botbone.png')
        .attr('y', '0').attr('x', '0')
        .attr('width', '224').attr('height', '255');

        // Dark background under reactive components.
        d3.select(n).select('svg')
        .append('rect').attr({
            'width': '224', 'height': '255', 'fill':'#000000', 'fill-opacity':'0.25',
        });

        var render_digital_pins = function(item, config) {
            var g = d3.select(n).select('svg').append('g');
            g
            .append('rect').attr({
                'width': config['rect-width'], 'height': config['rect-height'], 'fill':'#ffffff', 'fill-opacity':'1',
                'transform':'translate('+item[1]+','+item[2]+')'
            });
            g
            .append('text').attr({
                'text-anchor': config['text-anchor'],
                'font-size':config['font-size'], 'font-family':'Bitstream Vera Sans', 'fill':'#ffffff', 'fill-opacity':'1',
                'transform':'translate('+(item[1]+config['text-dxy'][0])+','+(item[2]+config['text-dxy'][1])+')'
            })
            .append('tspan').text(item[0]);
        };

        var render_analog_pins = function(item, config) {
            var g = d3.select(n).select('svg').append('g');
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
            .append('tspan').text(item[0]);
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
        ['USR0', 'USR1', 'USR2', 'USR3']
        .map(function(x, i) {
            return [x, 173.875, 183-i*3.75];
        })
        .forEach(function(x) { render_digital_pins (x, small_anchored_list_start); });

        // Digital pins
        ['24V', '24V', '24V', 'DGND', 'PWR_BUT', 'SYS_RESETn', 'CLKOUT2', 'GPIO3_7', 'GPIO3_8', 'DGND']
        .map(function(x, i) {
            return [x, 133-i*0.075, 85+i*6.55];
        }).forEach(function (x) { render_digital_pins (x, large_anchored_list_start); });

        ['24V', '24V', '24V', '24V', 'DGND', 'eQEP2A_in', 'eQEP2B_in', 'eQEP2_index', 'DGND']
        .map (function(x, i) {
            return [x, 126.5-i*0.075, 85+i*6.55];
        }).forEach(function (x) { render_digital_pins (x, large_anchored_list_end); });

        [
            'SYS_5V', 'SYS_5V', 'DGND', 'UART1_TXD', 'UART1_RXD', 'EHRPWM2A',
            'DGND', 'EHRPWM2B', 'GPIO0_26', 'DGND', 'GPIO0_27', 'SPI1_CS0',
            'SPI1_CS1', 'I2C0_SCL', 'DGND', 'GPIO3_16', 'DGND', 'SPI0_CS0',
            'SPI0_D1', 'SPI0_SCLK'
        ].map(function(x, i) {
            return [x, 45.875-i*0.070, 84.5+i*6.57];
        }).forEach(function (x) { render_digital_pins (x, large_anchored_list_start); });

        [
            'VDD_3V3B', 'I2C2_SDA', 'I2C2_SCL', 'TIMER4', 'DGND', 'eQEP0A_in',
            'eQEP0B_in', 'eQEP0_index', 'VDD_3V3B', 'SPI1_D1', 'SPI1_D0', 'SPI1_SCLK',
            'DGND', 'I2C0_SDA', 'TIMER6', 'TIMER7', 'GPIO1_15', 'SPI0_D0',
            'GPIO3_21', 'DGND'
        ].map(function(x, i) {
            return [x, 40-i*0.070, 84.5+i*6.57];
        }).forEach(function (x) { render_digital_pins (x, large_anchored_list_end); });

        // Analog inputs
        ['AIN4', 'AIN5', 'AIN6']
        .map (function (x, i) {
            return [x, 132.375-i*0.075, 151+i*6.55];
        }).forEach(function (x) { render_analog_pins (x, large_anchored_list_start); });
        ['AIN0', 'AIN1', 'AIN2', 'AIN3']
        .map (function (x, i) {
            return [x, 126-i*0.075, 144.25+i*6.55];
        }).forEach(function (x) { render_analog_pins (x, large_anchored_list_end); });
    },
    render: function() {
        return (
            <div id="canvas"></div>
        );
    }
});

module.exports = Canvas;
