const viewer= document.getElementById("product");
const prev_btn=document.getElementById("prev");
const next_btn=document.getElementById("next");
const item =document.getElementById("item");
let products=[
    {path:
        "./Assests/1.jpg"
    },
    {path:
        "./Assests/2.jpg"
    },
    {path:
        "./Assests/3.jpg"
    },
    {path:
        "./Assests/4.jpg"
    }
];




let counter=0;
viewer.innerHTML=`<img src="${products[counter].path}" alt="Product Image">`;

prev_btn.addEventListener("click", function(){

    if(counter > 0)
    {
        counter--;
        viewer.innerHTML=`<img src="${products[counter].path}" alt="Product Image">`;
    }
});
next_btn.addEventListener("click", function(){

    if(counter < (products.length-1))
    {
        counter++;
        viewer.innerHTML=`<img src="${products[counter].path}" alt="product image">`;
    }
});