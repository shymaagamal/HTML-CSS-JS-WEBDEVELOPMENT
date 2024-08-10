//////////// get html element 
const myText = document.getElementById("text")
const btn = document.querySelector("button")
const inputBar =  document.querySelector("input")
////////////// manipulation
myText.innerText = "new text"
myText.style.color = "red"

// events
//////////////// mouse events
const callback = function (){
    console.log("event is fired");
}
// btn.addEventListener("click",callback)
// btn.addEventListener("dblclick",callback)
// btn.addEventListener("mousedown",callback)
// btn.addEventListener("mouseup",callback)
// btn.addEventListener("mousemove",callback)
// btn.addEventListener("mousemove",callback)
// btn.addEventListener("mouseleave",callback)

/////////////// keyboard events
// const body = document.body
// body.addEventListener("keydown",callback)
// body.addEventListener("keyup",callback)
// btn.addEventListener("keypress",callback)

/////////// input events
// inputBar.addEventListener("focus",callback)
inputBar.addEventListener("change",function(event){
    console.log(event.target);
    console.log("event is fired");
}
)
// inputBar.addEventListener("blur",callback)


///////////// creating & deleting html element
const newTitle = document.createElement("li")
newTitle.innerText = "new title"
const list = document.querySelector("ul")
list.appendChild(newTitle)

// newTitle.remove()


// for (let i=0;i<4;i++){
// const favouriteMovie = prompt("movie name")
// console.log(favouriteMovie);
// const newMovie = document.createElement("li")
// newMovie.innerText = favouriteMovie
// list.appendChild(newMovie)
// }



// dom traversing
// parent
const item  = document.getElementById("item")
let list2  = document.getElementsByClassName("list2")
list2  = list2[0]

// console.log(item.parentElement);

// children
console.log(list2.children);
// console.log(list2.childNodes);
console.log(list2.firstElementChild);

// siblings
console.log(item.previousElementSibling);
