let n
初始化位置()

//每2秒后添加相应类去移动图片
setInterval(() => {
    makeLeave(getImage(n))
        .one('transitionend',function(a){
            makeEnter($(a.currentTarget))
        })
    makeCurrent(getImage(n+1))
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

function 初始化位置(){
    n=1
    $(`.images>img:nth-child(${n})`).addClass('current')
        .siblings().addClass('enter')
}

function getImage(n){
    return $(`.images>img:nth-child(${x(n)})`)
}

function makeCurrent($node){
    return $node.removeClass('leave enter').addClass('current')
}

function makeLeave($node){
    return $node.removeClass('current enter').addClass('leave')
}

function makeEnter($node){
    return $node.removeClass('leave current').addClass('enter')
}













