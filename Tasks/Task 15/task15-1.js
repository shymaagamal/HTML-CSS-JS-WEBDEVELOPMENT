const btnOurModel=document.querySelector("button")
const messgaeDiv=document.querySelector(".model-container")
const btnClose= document.querySelector("#close-btn")

btnOurModel.addEventListener("click",function(){

        messgaeDiv.style.display = 'flex' ;
 
});

btnClose.addEventListener("click", function(){
    messgaeDiv.style.display= 'none';
});

window.addEventListener("click" ,function(e)
{
    if(e.target== messgaeDiv)
    {
    messgaeDiv.style.display= 'none';

    }
})