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
    sidebar.style.left="-70%";
})
//slide window


//collections
var search=document.getElementById("search__collections")
var collection=document.querySelector(".collection__s2__items")
var collectionList=collection.querySelectorAll(".collection__s2__items__shirts");


search.addEventListener("keyup",function(event){
    var enterdValue=event.target.value.toUpperCase();
    
})



