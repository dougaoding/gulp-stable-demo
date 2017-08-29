(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS5qcyJdLCJuYW1lcyI6WyJBUEkiLCJ0ZXN0Iiwid2hmIiwiSGVpZ2h0IiwiJCIsIndpbmRvdyIsImhlaWdodCIsIldpZHRoIiwid2lkdGgiLCJjc3MiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOztBQUFBLElBQU1BLE1BQU07QUFDUkMsVUFBTSxNQURFO0FBRVJDLFNBQUtBO0FBRkcsQ0FBWjs7QUFLQSxTQUFTQSxHQUFULEdBQWU7QUFDWDtBQUNBLFFBQUlDLFNBQVNDLEVBQUVDLE1BQUYsRUFBVUMsTUFBVixFQUFiO0FBQ0EsUUFBSUMsUUFBUUgsRUFBRUMsTUFBRixFQUFVRyxLQUFWLEVBQVo7QUFDQUosTUFBRSxPQUFGLEVBQVdLLEdBQVgsQ0FBZSxZQUFmLEVBQTZCTixTQUFTLElBQXRDO0FBQ0E7QUFDQSxRQUFLSSxRQUFRLEVBQVQsR0FBZSxFQUFuQixFQUF1QjtBQUNuQkgsVUFBRSxNQUFGLEVBQVVLLEdBQVYsQ0FBYyxXQUFkLEVBQTJCLE1BQTNCO0FBQ0FMLFVBQUUsTUFBRixFQUFVSyxHQUFWLENBQWMsRUFBRSxhQUFhLE9BQWYsRUFBd0IsVUFBVSxRQUFsQyxFQUFkO0FBQ0gsS0FIRCxNQUdPO0FBQ0hMLFVBQUUsTUFBRixFQUFVSyxHQUFWLENBQWMsV0FBZCxFQUE0QkYsUUFBUSxFQUFULEdBQWUsSUFBMUM7QUFDSDtBQUNKO0FBQ0RHLE9BQU9DLE9BQVAsR0FBaUJYLEdBQWpCIiwiZmlsZSI6ImFwaS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEFQSSA9IHtcclxuICAgIHRlc3Q6ICd0ZXN0JyxcclxuICAgIHdoZjogd2hmXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHdoZigpIHtcclxuICAgIC8vXHTojrflj5blsY/luZXpq5jluqbjgIHlrr3luqZcclxuICAgIHZhciBIZWlnaHQgPSAkKHdpbmRvdykuaGVpZ2h0KCk7XHJcbiAgICB2YXIgV2lkdGggPSAkKHdpbmRvdykud2lkdGgoKTtcclxuICAgICQoJy53aW5IJykuY3NzKCdtaW4taGVpZ2h0JywgSGVpZ2h0ICsgJ3B4Jyk7XHJcbiAgICAvL1x05Yik5pat5bGP5bmV5aSn5bCPLOacgOWkp+WuveW6puaOp+WItuS4ujc1MCzlm77niYflpKflsI/kuI3og73lsI/kuo43NTDnmoTorr7orqHlm75cclxuICAgIGlmICgoV2lkdGggLyAxMCkgPiA3NSkge1xyXG4gICAgICAgICQoJ2h0bWwnKS5jc3MoJ2ZvbnQtc2l6ZScsICc3NXB4Jyk7XHJcbiAgICAgICAgJCgnYm9keScpLmNzcyh7ICdtYXgtd2lkdGgnOiAnNzUwcHgnLCAnbWFyZ2luJzogJzAgYXV0bycgfSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJCgnaHRtbCcpLmNzcygnZm9udC1zaXplJywgKFdpZHRoIC8gMTApICsgJ3B4Jyk7XHJcbiAgICB9O1xyXG59O1xyXG5tb2R1bGUuZXhwb3J0cyA9IEFQSTsiXX0=
