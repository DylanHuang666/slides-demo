//初始化位置
$('.images>img:nth-child(1)').addClass('current');
$('.images>img:nth-child(2)').addClass('enter');
$('.images>img:nth-child(3)').addClass('enter');

//每2秒后添加相应类去移动图片
setTimeout(() => {
    $('.images>img:nth-child(1)').removeClass('current').addClass('leave')
        .one('transitionend',function(a){
            $(a.currentTarget).removeClass('leave').addClass('enter')
        })
    $('.images>img:nth-child(2)').removeClass('enter').addClass('current');
}, 2000);

setTimeout(() => {
    $('.images>img:nth-child(2)').removeClass('current').addClass('leave')
        .one('transitionend',function(a){
            $(a.currentTarget).removeClass('leave').addClass('enter')
        })
    $('.images>img:nth-child(3)').removeClass('enter').addClass('current');
}, 4000);

setTimeout(() => {
    $('.images>img:nth-child(3)').removeClass('current').addClass('leave')
        .one('transitionend',function(a){
            $(a.currentTarget).removeClass('leave').addClass('enter')
        })
    $('.images>img:nth-child(1)').removeClass('enter').addClass('current');
}, 6000);

setTimeout(() => {
    $('.images>img:nth-child(1)').removeClass('current').addClass('leave')
        .one('transitionend',function(a){
            $(a.currentTarget).removeClass('leave').addClass('enter')
        })
    $('.images>img:nth-child(2)').removeClass('enter').addClass('current');
}, 8000);