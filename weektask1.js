var d2=document.querySelector('.d2')
var p1=document.querySelector('.p1')

var d1=document.querySelector('.d1')
var p0=document.querySelector('.par')

var d3=document.querySelector('.d3')
var p2=document.querySelector('.p2')

d2.addEventListener('click',function(){
    p1.style.transform='translateX(-100%)'
    p0.style.transform='translateX(-100%)'
    p2.style.transform='translateX(-100%)'
})


d3.addEventListener('click',function(){
    p2.style.transform='translateX(-100%)'
})


d1.addEventListener('click',function(){
    p0.style.transform='translateX(100%)'
})