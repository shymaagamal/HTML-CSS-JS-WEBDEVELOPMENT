// selecting element in html
let title=document.getElementById("one");
let title2=document.getElementsByClassName("two");
let title3=document.getElementsByTagName("a");
let title4=document.querySelector(".two");
let title5=document.querySelectorAll(".two");


// console.log(title2);

// // manipulating html
// console.log(title.innerText);


title.style.color="red";
title.style.border="2px red solid";

title3[0].href="www.google.com"
title2[0].classList.add("new")
// title2[0].classList.replace("two","three")

console.log(title2)


// events
let isVisible= false
const btn= document.querySelector("button")
console.log(btn)
myelement=document.getElementById("myElement");
myelement.style.display="none";
btn.addEventListener("click",function(){
    isVisible=!isVisible;
    if(isVisible)
    {
        myelement.style.display="block";
    }
    else
    {
        myelement.style.display="none";
    }
})