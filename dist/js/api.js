(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

(function e(t, n, r) {
    function s(o, u) {
        if (!n[o]) {
            if (!t[o]) {
                var a = typeof require == "function" && require;if (!u && a) return a(o, !0);if (i) return i(o, !0);throw new Error("Cannot find module '" + o + "'");
            }var f = n[o] = { exports: {} };t[o][0].call(f.exports, function (e) {
                var n = t[o][1][e];return s(n ? n : e);
            }, f, f.exports, e, t, n, r);
        }return n[o].exports;
    }var i = typeof require == "function" && require;for (var o = 0; o < r.length; o++) {
        s(r[o]);
    }return s;
})({ 1: [function (require, module, exports) {
        'use strict';

        var API = {
            test: 'test',
            whf: whf
        };

        function whf() {
            //	获取屏幕高度、宽度
            var Height = $(window).height();
            var Width = $(window).width();
            $('.winH').css('min-height', Height + 'px');
            //	判断屏幕大小,最大宽度控制为750,图片大小不能小于750的设计图
            if (Width / 10 > 75) {
                $('html').css('font-size', '75px');
                $('body').css({ 'max-width': '750px', 'margin': '0 auto' });
            } else {
                $('html').css('font-size', Width / 10 + 'px');
            };
        };
        module.exports = API;
    }, {}] }, {}, [1]);
},{}]},{},[1])