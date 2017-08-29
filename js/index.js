(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
const API = {
    test: 'test',
    whf
}

function whf() {
    //	获取屏幕高度、宽度
    var Height = $(window).height();
    var Width = $(window).width();
    $('.winH').css('min-height', Height + 'px');
    //	判断屏幕大小,最大宽度控制为750,图片大小不能小于750的设计图
    if ((Width / 10) > 75) {
        $('html').css('font-size', '75px');
        $('body').css({ 'max-width': '750px', 'margin': '0 auto' })
    } else {
        $('html').css('font-size', (Width / 10) + 'px');
    };
};
module.exports = API;
},{}],2:[function(require,module,exports){
'use strict';

//引入全局变量
var api = require('./api.js');
var whf = api.whf;
//引入jquery

$(document).ready(function () {
    whf();
    //  屏幕大小改变,再次改变
    $(window).resize(function () {
        whf();
    });
});
},{"./api.js":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImFwaSIsInJlcXVpcmUiLCJ3aGYiLCIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsIndpbmRvdyIsInJlc2l6ZSJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBLElBQU1BLE1BQU1DLFFBQVEsVUFBUixDQUFaO0lBQ1FDLEcsR0FBUUYsRyxDQUFSRSxHO0FBQ1I7O0FBRUFDLEVBQUVDLFFBQUYsRUFBWUMsS0FBWixDQUFrQixZQUFXO0FBQ3pCSDtBQUNBO0FBQ0FDLE1BQUVHLE1BQUYsRUFBVUMsTUFBVixDQUFpQixZQUFXO0FBQ3hCTDtBQUNILEtBRkQ7QUFJSCxDQVBEIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy/lvJXlhaXlhajlsYDlj5jph49cclxuY29uc3QgYXBpID0gcmVxdWlyZSgnLi9hcGkuanMnKTtcclxuY29uc3QgeyB3aGYgfSA9IGFwaTtcclxuLy/lvJXlhaVqcXVlcnlcclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG4gICAgd2hmKCk7XHJcbiAgICAvLyAg5bGP5bmV5aSn5bCP5pS55Y+YLOWGjeasoeaUueWPmFxyXG4gICAgJCh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbigpIHtcclxuICAgICAgICB3aGYoKTtcclxuICAgIH0pO1xyXG5cclxufSk7Il19
