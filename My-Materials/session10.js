console.log("Hello")
var x=10
console.log(x)
x="shaimaa"
console.log(x)
// condation

var userAge=17
if (userAge >=18)
{
    console.log("this userAge is more than ", userAge)
}
else if(userAge >16 && userAge <18)
{
    console.log("user age is 17")
}
else
{
    console.log("userAge is less than 18")
}

// Calculater

var x=parseFloat(prompt("give me first number"))

var y=parseFloat(prompt("give me second number"))
var sign=prompt("choose on of + * - / ")
var result
if(sign=="+")
{
    result= x + y
    console.log(result)
}
else if(sign=="-")
{
    result=x-y
    console.log(result)

}
else if(sign=="*")
{
    result=x*y
    console.log(result)

}
else if(sign=="/")
{
    result=x/y
    console.log(result)
    
}
else{
    console.log("undefined ")
}
alert("Hel10lo")
