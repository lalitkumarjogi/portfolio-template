var hamburger=document.querySelectorAll(".hamb")
var navlist=document.querySelectorAll(".nav-list")
var links=document.querySelectorAll(".nav-list li")

hamburger.addEventListener("click",function(){
    this.classList.toggle("click")
    navlist.classList.toggle("open")
})

