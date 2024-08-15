// Element.addEventListenr("click",function)

const buttonTwo = document.querySelector('.btn-2')

function alertBtn()
{
    alert('I Love JavaScript at btn 2')
}

buttonTwo.addEventListener("click", alertBtn)

// MouseHover

const newBackgroundCOlor = document.querySelector('.box-3')

function changeBgColor()
{
    newBackgroundCOlor.style.backgroundColor = 'blue'
}

newBackgroundCOlor.addEventListener("mouseover",changeBgColor)


//  Reveal Event

const revealBtn= document.querySelector('.reveal-btn')

const hiddenContent = document.querySelector('.hidden-content')

function revealCOntent()
{
    if(hiddenContent.classList.contains('reveal')){
        hiddenContent.classList.remove('reveal')
    }
    else{
        hiddenContent.classList.add('reveal')

    }
}
revealBtn.addEventListener('click', revealCOntent)


window.addEventListener("click", function(){
    console.log("window")
},true)

document.addEventListener("click", function(){
    console.log("Document")

},true)

document.querySelector(".div2").addEventListener("click", function(){
    console.log("DIV 2")

},true)
document.querySelector(".div1").addEventListener("click", function(){
    console.log("DIV 1")

},true)

document.querySelector(".clicked").addEventListener("click", function(e){
    console.log(e)

},true)