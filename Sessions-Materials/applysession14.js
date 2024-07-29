let quots=[
    {quote: "Everything happening around me is very random. I am enjoying the phase"
    ,writer: "x" 
    },
    {quote: "Everything happening around me is very random. I am enjoying the phase"
    ,writer: "b" 
    },
    {quote: "Together we can change the world, just one random act of kindness at a time."

    ,writer: "c" 
    },
];

let counter=0;
let btn=document.querySelector("button");
const quoteDisplay = document.getElementById("quote");
btn.addEventListener("click", function(){

    if(counter >2)
    {
        counter=0;
    }
    else{
        counter++;
    }

    quote.innerHTML = `<h1>${quots[counter].quote}</p><p><em>- ${quots[counter].writer}</em></p>`;
})