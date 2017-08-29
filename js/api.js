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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS5qcyJdLCJuYW1lcyI6WyJBUEkiLCJ0ZXN0Iiwid2hmIiwiSGVpZ2h0IiwiJCIsIndpbmRvdyIsImhlaWdodCIsIldpZHRoIiwid2lkdGgiLCJjc3MiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOztBQUFBLElBQU1BLE1BQU07QUFDUkMsVUFBTSxNQURFO0FBRVJDO0FBRlEsQ0FBWjs7QUFLQSxTQUFTQSxHQUFULEdBQWU7QUFDWDtBQUNBLFFBQUlDLFNBQVNDLEVBQUVDLE1BQUYsRUFBVUMsTUFBVixFQUFiO0FBQ0EsUUFBSUMsUUFBUUgsRUFBRUMsTUFBRixFQUFVRyxLQUFWLEVBQVo7QUFDQUosTUFBRSxPQUFGLEVBQVdLLEdBQVgsQ0FBZSxZQUFmLEVBQTZCTixTQUFTLElBQXRDO0FBQ0E7QUFDQSxRQUFLSSxRQUFRLEVBQVQsR0FBZSxFQUFuQixFQUF1QjtBQUNuQkgsVUFBRSxNQUFGLEVBQVVLLEdBQVYsQ0FBYyxXQUFkLEVBQTJCLE1BQTNCO0FBQ0FMLFVBQUUsTUFBRixFQUFVSyxHQUFWLENBQWMsRUFBRSxhQUFhLE9BQWYsRUFBd0IsVUFBVSxRQUFsQyxFQUFkO0FBQ0gsS0FIRCxNQUdPO0FBQ0hMLFVBQUUsTUFBRixFQUFVSyxHQUFWLENBQWMsV0FBZCxFQUE0QkYsUUFBUSxFQUFULEdBQWUsSUFBMUM7QUFDSDtBQUNKO0FBQ0RHLE9BQU9DLE9BQVAsR0FBaUJYLEdBQWpCIiwiZmlsZSI6ImFwaS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEFQSSA9IHtcclxuICAgIHRlc3Q6ICd0ZXN0JyxcclxuICAgIHdoZlxyXG59XHJcblxyXG5mdW5jdGlvbiB3aGYoKSB7XHJcbiAgICAvL1x06I635Y+W5bGP5bmV6auY5bqm44CB5a695bqmXHJcbiAgICB2YXIgSGVpZ2h0ID0gJCh3aW5kb3cpLmhlaWdodCgpO1xyXG4gICAgdmFyIFdpZHRoID0gJCh3aW5kb3cpLndpZHRoKCk7XHJcbiAgICAkKCcud2luSCcpLmNzcygnbWluLWhlaWdodCcsIEhlaWdodCArICdweCcpO1xyXG4gICAgLy9cdOWIpOaWreWxj+W5leWkp+WwjyzmnIDlpKflrr3luqbmjqfliLbkuLo3NTAs5Zu+54mH5aSn5bCP5LiN6IO95bCP5LqONzUw55qE6K6+6K6h5Zu+XHJcbiAgICBpZiAoKFdpZHRoIC8gMTApID4gNzUpIHtcclxuICAgICAgICAkKCdodG1sJykuY3NzKCdmb250LXNpemUnLCAnNzVweCcpO1xyXG4gICAgICAgICQoJ2JvZHknKS5jc3MoeyAnbWF4LXdpZHRoJzogJzc1MHB4JywgJ21hcmdpbic6ICcwIGF1dG8nIH0pXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgICQoJ2h0bWwnKS5jc3MoJ2ZvbnQtc2l6ZScsIChXaWR0aCAvIDEwKSArICdweCcpO1xyXG4gICAgfTtcclxufTtcclxubW9kdWxlLmV4cG9ydHMgPSBBUEk7Il19
