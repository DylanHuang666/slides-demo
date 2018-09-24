//初始化位置
$('.images>img:nth-child(1)').addClass('current');
$('.images>img:nth-child(2)').addClass('enter');
$('.images>img:nth-child(3)').addClass('enter');

//每2秒后添加相应类去移动图片
let n=1
setInterval(() => {
    $(`.images>img:nth-child(${x(n)})`).removeClass('current').addClass('leave')
        .one('transitionend',function(a){
            $(a.currentTarget).removeClass('leave').addClass('enter')
        })
    $(`.images>img:nth-child(${x(n+1)})`).removeClass('enter').addClass('current');
    n+=1
}, 2000)

function x(n){
    if(n>3){
        n=n%3
        if(n===0){
            n=3
        }
    }
    return n
}