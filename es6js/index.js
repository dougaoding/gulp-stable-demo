//引入全局变量
const api = require('./api.js');
const { whf } = api;
//引入jquery

$(document).ready(function() {
    whf();
    //  屏幕大小改变,再次改变
    $(window).resize(function() {
        whf();
    });

});