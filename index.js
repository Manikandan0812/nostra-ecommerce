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

// var collection=document.querySelector(".collection__s2__items")
// var collectionList=collection.querySelectorAll(".collection__s2__items__shirts");

// var checkbox=document.getElementsByName("checkbox");

// console.log(checkbox);
// for(i=0;i<checkbox.length;i++)
//     {
//         checkbox[i].addEventListener("click",function(event)
//     {
//          var filt =(event.target.value)
        

//     })
//     }



// Get all checkboxes
var checkboxes = document.querySelectorAll('input[type="checkbox"]');
var collectionList = document.querySelectorAll('.collection__s2__items__shirts');

// Store original display style of each item
var originalDisplay = {};
collectionList.forEach(function (item) {
    originalDisplay[item] = item.style.display;
});

// Add event listener to each checkbox
checkboxes.forEach(function (checkbox) {
    checkbox.addEventListener("click", function () {
        // Get the value of the clicked checkbox
        var filterValue = this.value;
        console.log(filterValue );

        collectionList.forEach(function (item) {
            var itemName = item.querySelector('h1').innerText;
            console.log(itemName);
            if (itemName.toLowerCase().includes(filterValue)) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        });

        // Check if all checkboxes are unchecked
        var allUnchecked = true;
        checkboxes.forEach(function (cb) {
            if (cb.checked) {
                allUnchecked = false;
            }
        });

        // If all checkboxes are unchecked, restore original display style
        if (allUnchecked) {
            collectionList.forEach(function (item) {
                item.style.display = originalDisplay[item];
            });
        }
    });
});
