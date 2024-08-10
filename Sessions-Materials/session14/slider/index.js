let main  = document.querySelector(".mainImg")
let imgs = document.getElementsByClassName("image")

for (let i=0;i<imgs.length;i++){
imgs[i].addEventListener("click",function(){
    main.src=imgs[i].src
})
}