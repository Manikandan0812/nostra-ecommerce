//OFFER
var close=document.getElementById("close");
var offer=document.getElementById("offer");

close.addEventListener("click",function(){
    offer.style.display="none";
})

//side bar
var menu=document.getElementById("nav__menu");
var sidebar=document.getElementById("nav__sidebar");
var close=document.getElementById("nav__close");

menu.addEventListener("click",function(){
    sidebar.style.left=0;
})
close.addEventListener("click",function(){
    sidebar.style.left="-50%";
})