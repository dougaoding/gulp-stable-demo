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