/**
 * Copyright 2015, Mapacode Inc.
 * Copyrights licensed under the ISC License. See the accompanying LICENSE file for terms.
 */
'use strict';
var React = require('react');

var Control = React.createClass({
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
        .append('rect').classed('reactive-background', true).attr({
            'width': '224', 'height': '255'
        });

        var render_digital_pin = function(item, size, anchored) {
            var g = svg.append('g').attr('id', item[0]['tag']).classed(item[0]['class'], true);
            g
            .append('rect').classed('pin', true).attr({
                'width': size['rect-width'], 'height': size['rect-height'],
                'transform':'translate('+item[1]+','+item[2]+')'
            });
            g
            .append('text').attr({
                'text-anchor': anchored['text-anchor'],
                'font-size':size['font-size'],
                'transform':'translate('+(item[1]+anchored['text-dx'])+','+(item[2]+size['rect-height'])+')'
            })
            .append('tspan').text(item[0]['signal']);
        };

        var render_analog_pin = function(item, size, anchored) {
            var g = svg.append('g').attr('id', item[0]['tag']).classed(item[0]['class'], true);
            g
            .append('rect').classed('pin', true).attr({
                'width': size['rect-width'], 'height': size['rect-height'],
                'transform':'translate('+item[1]+','+item[2]+')'
            });
            g
            .append('rect').classed('background', true).attr({
                'width': 20, 'height': size['rect-height'],
                'transform':'translate('
                    + (item[1]+anchored['text-dx']-(anchored['text-anchor']==='end' ? 20 : 0))
                    +','+item[2]+')'
            });
            g
            .append('text').attr({
                'text-anchor': anchored['text-anchor'],
                'font-size':size['font-size'],
                'transform':'translate('+(item[1]+anchored['text-dx'])+','+(item[2]+size['rect-height'])+')'
            })
            .append('tspan').text(item[0]['signal']);
            g
            .append('rect').classed('bar', true).attr({
                'width': 10, 'height': size['rect-height'],
                'transform':'translate('
                    +(item[1]+anchored['text-dx']-(anchored['text-anchor']==='end' ? 20 : 0))
                    +','+item[2]+')'
            });
        };

        var anchored_start = {
            'text-anchor': 'start',
            'text-dx': 4.75,
        };
        
        var anchored_end = {
            'text-anchor': 'end',
            'text-dx': -1.25,
        };

        var small = {
            'font-size': '4px',
            'rect-width': 2.75,
            'rect-height': 1.8,
        };

        var large = {
            'font-size': '6px',
            'rect-width': 3.75,
            'rect-height': 3.8,
        };

        // LEDs
        [
            {signal: 'USR0', tag: 'usr0', class: 'digital'},
            {signal: 'USR1', tag: 'usr1', class: 'digital'},
            {signal: 'USR2', tag: 'usr2', class: 'digital'},
            {signal: 'USR3', tag: 'usr3', class: 'digital'}
        ]
        .map(function(x, i) {
            return [x, 173.875, 183-i*3.75];
        })
        .forEach(function(x) { render_digital_pin (x, small, anchored_start); });

        // Digital pins
        [
            {signal: '24V',         tag: 'j15_2', class: 'power'},
            {signal: '24V',         tag: 'j15_4', class: 'power'},
            {signal: '24V',         tag: 'j15_6', class: 'power'},
            {signal: 'DGND',        tag: 'j15_8', class: 'power'},
            {signal: 'PWR_BUT',     tag: 'j15_10', class: 'digital'},
            {signal: 'SYS_RESETn',  tag: 'j15_12', class: 'digital'},
            {signal: 'CLKOUT2',     tag: 'j15_14', class: 'digital'},
            {signal: 'GPIO3_7',     tag: 'j15_16', class: 'digital'},
            {signal: 'GPIO3_8',     tag: 'j15_18', class: 'digital'},
            {signal: 'DGND',        tag: 'j15_20', class: 'power'}
        ]
        .map(function(x, i) {
            return [x, 133-i*0.075, 85+i*6.55];
        }).forEach(function (x) { render_digital_pin (x, large, anchored_start); });

        [
            {signal: '24V',         tag: 'j15_1', class: 'power'},
            {signal: '24V',         tag: 'j15_3', class: 'power'},
            {signal: '24V',         tag: 'j15_5', class: 'power'},
            {signal: '24V',         tag: 'j15_7', class: 'power'},
            {signal: 'DGND',        tag: 'j15_9', class: 'power'},
            {signal: 'eQEP2A_in',   tag: 'j15_11', class: 'digital'},
            {signal: 'eQEP2B_in',   tag: 'j15_13', class: 'digital'},
            {signal: 'eQEP2_index', tag: 'j15_15', class: 'digital'},
            {signal: 'DGND',        tag: 'j15_17', class: 'power'}
        ]
        .map (function(x, i) {
            return [x, 126.5-i*0.075, 85+i*6.55];
        }).forEach(function (x) { render_digital_pin (x, large, anchored_end); });

        [
            {signal: 'SYS_5V',      tag: 'j14_2', class: 'power'},
            {signal: 'SYS_5V',      tag: 'j14_4', class: 'power'},
            {signal: 'DGND',        tag: 'j14_6', class: 'power'},
            {signal: 'UART1_TXD',   tag: 'j14_8', class: 'digital'},
            {signal: 'UART1_RXD',   tag: 'j14_10', class: 'digital'},
            {signal: 'EHRPWM2A',    tag: 'j14_12', class: 'digital'},
            {signal: 'DGND',        tag: 'j14_14', class: 'power'},
            {signal: 'EHRPWM2B',    tag: 'j14_16', class: 'digital'},
            {signal: 'GPIO0_26',    tag: 'j14_18', class: 'digital'},
            {signal: 'DGND',        tag: 'j14_20', class: 'power'},
            {signal: 'GPIO0_27',    tag: 'j14_22', class: 'digital'},
            {signal: 'SPI1_CS0',    tag: 'j14_24', class: 'digital'},
            {signal: 'SPI1_CS1',    tag: 'j14_26', class: 'digital'},
            {signal: 'I2C0_SCL',    tag: 'j14_28', class: 'digital'},
            {signal: 'DGND',        tag: 'j14_30', class: 'power'},
            {signal: 'GPIO3_16',    tag: 'j14_32', class: 'digital'},
            {signal: 'DGND',        tag: 'j14_34', class: 'power'},
            {signal: 'SPI0_CS0',    tag: 'j14_36', class: 'digital'},
            {signal: 'SPI0_D1',     tag: 'j14_38', class: 'digital'},
            {signal: 'SPI0_SCLK',   tag: 'j14_40', class: 'digital'}
        ].map(function(x, i) {
            return [x, 45.875-i*0.070, 84.5+i*6.57];
        }).forEach(function (x) { render_digital_pin (x, large, anchored_start); });

        [
            {signal: 'VDD_3V3B',    tag: 'j14_1', class: 'power'},
            {signal: 'I2C2_SDA',    tag: 'j14_3', class: 'digital'},
            {signal: 'I2C2_SCL',    tag: 'j14_5', class: 'digital'},
            {signal: 'TIMER4',      tag: 'j14_7', class: 'digital'},
            {signal: 'DGND',        tag: 'j14_9', class: 'power'},
            {signal: 'eQEP0A_in',   tag: 'j14_11', class: 'digital'},
            {signal: 'eQEP0B_in',   tag: 'j14_13', class: 'digital'},
            {signal: 'eQEP0_index', tag: 'j14_15', class: 'digital'},
            {signal: 'VDD_3V3B',    tag: 'j14_17', class: 'power'},
            {signal: 'SPI1_D1',     tag: 'j14_19', class: 'digital'},
            {signal: 'SPI1_D0',     tag: 'j14_21', class: 'digital'},
            {signal: 'SPI1_SCLK',   tag: 'j14_23', class: 'digital'},
            {signal: 'DGND',        tag: 'j14_25', class: 'power'},
            {signal: 'I2C0_SDA',    tag: 'j14_27', class: 'digital'},
            {signal: 'TIMER6',      tag: 'j14_29', class: 'digital'},
            {signal: 'TIMER7',      tag: 'j14_31', class: 'digital'},
            {signal: 'GPIO1_15',    tag: 'j14_33', class: 'digital'},
            {signal: 'SPI0_D0',     tag: 'j14_35', class: 'digital'},
            {signal: 'GPIO3_21',    tag: 'j14_37', class: 'digital'},
            {signal: 'DGND',        tag: 'j14_39', class: 'power'}
        ].map(function(x, i) {
            return [x, 40-i*0.070, 84.5+i*6.57];
        }).forEach(function (x) { render_digital_pin (x, large, anchored_end); });

        // Analog inputs
        [
            {signal: 'AIN4', tag: 'j15_22', class: 'analog'},
            {signal: 'AIN5', tag: 'j15_24', class: 'analog'},
            {signal: 'AIN6', tag: 'j15_26', class: 'analog'}
        ]
        .map (function (x, i) {
            return [x, 132.375-i*0.075, 151+i*6.55];
        }).forEach(function (x) { render_analog_pin (x, large, anchored_start); });
        [
            {signal: 'AIN0', tag: 'j15_19', class: 'analog'},
            {signal: 'AIN1', tag: 'j15_21', class: 'analog'},
            {signal: 'AIN2', tag: 'j15_23', class: 'analog'},
            {signal: 'AIN3', tag: 'j15_25', class: 'analog'}
        ]
        .map (function (x, i) {
            return [x, 126-i*0.075, 144.25+i*6.55];
        }).forEach(function (x) { render_analog_pin (x, large, anchored_end); });
        
        svg.select('#usr2').classed('off', true);
        svg.select('#j15_16').classed('off', true);
        svg.select('#j14_33').classed('off', true);
        svg.select('#j14_13').classed('off', true);
        svg.select('#j15_13').classed('off', true);
        svg.select('#j15_22').select('rect.bar').attr('width', 5);
        svg.select('#j15_24').select('rect.bar').attr('width', 19);
        svg.select('#j15_26').select('rect.bar').attr('width', 13);
        svg.select('#j15_19').select('rect.bar').attr('width', 10);
        svg.select('#j15_21').select('rect.bar').attr('width', 4);
        svg.select('#j15_23').select('rect.bar').attr('width', 0);
        svg.select('#j15_25').select('rect.bar').attr('width', 12);
    },
    render: function() {
        return (
            <svg id="control"></svg>
        );
    }
});

module.exports = Control;
