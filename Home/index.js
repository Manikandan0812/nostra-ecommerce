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
var currentSlide=0;

var slideElement=document.getElementById("slider");
var totalWindow=slideElement.childElementCount;
console.log(totalWindow);

function next()
{
if(currentSlide<totalWindow)
    {
        currentSlide++;
        showSlide();
    }
}

function prev(){
    if(currentSlide>1)
        {
            currentSlide--;
            showSlide();
        }
}
function showSlide()
{
     var slides=document.getElementById("slider").getElementsByTagName("li");
      console.log(slides);
     for(let index=0;index<totalWindow;index++)
        {
            const element =slides[index];
            if(currentSlide==index+1)
                {
                    element.classList.remove("hidden");
                    console.log("Hii")
                }
                else
                {
                    element.classList.add("hidden");
                    console.log("Hi");
                }
        }
}