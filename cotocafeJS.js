let prev=document.getElementById("prev")
let next=document.getElementById("next")
let bigPhoto=document.querySelector('.sliderOne')
let count=1
next.addEventListener('click', function (){
    if(count<4) {
        count++
    }
    else {
        count=1
    }
    bigPhoto.style.backgroundImage=`url(img/photo${count}.jpg)`
    console.log(count)
})
prev.addEventListener('click', function (){
    if(count>1) {
        count--
    }
    else {
        count=4}
    bigPhoto.style.backgroundImage=`url(img/photo${count}.jpg)`
    console.log(count)
})
let t1=document.getElementById('t1')