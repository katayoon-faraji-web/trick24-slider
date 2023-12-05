
let _box = document.getElementById('main_box')
let _carousel = document.getElementById('carousel')
let _imgs = document.querySelectorAll('#carousel>img')
let _right = document.getElementById('right')
let _left = document.getElementById('left')
let _list = document.getElementById('list')
let img_len = _imgs.length
console.log(img_len);
_carousel.style.width = ((img_len)*600)+'px'
let turn = 0

_imgs.forEach((val)=>{
    let _circle = document.createElement('li')
    _circle.classList.add('circle')
    _list.appendChild(_circle)
})
let _lis = document.querySelectorAll('#list>li')

_lis.forEach((val , i)=>{
    val.addEventListener('click',(e)=>{
        _lis.forEach((x)=>{
            x.style.background = 'transparent'
        })
        e.target.style.background = 'white'
        turn = i
        _carousel.style.left = -(turn*600)+'px'
    })
})
_lis[turn].style.background = 'white'
_right.addEventListener('click',(e)=>{
    if(turn < (img_len-1)){
        turn++
        _carousel.style.left = -(turn*600)+'px'
    }
    check_li()
    check_right()
    check_left()
})

_left.addEventListener('click',(e)=>{
    if(turn > 0){
        turn--
        _carousel.style.left = -(turn*600)+'px'
    }
    check_li()
    check_left()
    check_right()
})

function check_right(){
    if(turn==img_len-1){
        _right.style.opacity = 0
    }
    else{
        _right.style.opacity = 1
    }
}
function check_left(){
    if(turn==0){
        _left.style.opacity = 0
    }
    else{
        _left.style.opacity = 1
    }
}
function check_li(){
    _lis.forEach((x)=>{
        x.style.background = 'transparent'
    })
    _lis[turn].style.background = 'white'
}


