// let squaresNumber = parseInt(prompt("squares number ?"))
let squaresNumber =  100

let container = document.querySelector(".container")
let colors = ["red","green","blue","gray","yellow","gold"]

function getRandomColor (){
    return Math.floor(Math.random()*colors.length)
}

for(let i=0;i<squaresNumber;i++){
    let square = document.createElement("div")
    square.className = "square"
    container.appendChild(square)
    square.addEventListener("mouseenter",function(){
        let index = getRandomColor()
        square.style.background = colors[index]
    })
    square.addEventListener("mouseleave",function(){
        square.style.background = "rgba(128, 128, 128, 0.377)"
    })
}