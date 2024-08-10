// var userName = "mostafa"

// if condition 
// if(userName=="mohamed"){
// console.log("mohamed")
// }else if (userName=="ahmed"){
// console.log("ahmed");
// }else{
//     console.log("not mohamed or ahmed")
// }


// var userName = "mostafa"
// switch(userName){
// case "ahmed":
//     console.log("ahmed");
//     break;
// case "mohamed":
//     console.log("mohamed");
//     break
// default:
//     console.log("not mohamed or ahmed")
// }

// loops
// for (var i=0;i<=5;i++){
//     if (i==3){
//         break;
//     }
// console.log(i);
// }

// do while

// var i=9
// do{
// console.log(i);
// i++
// }while(i<=5)

// while

// var i = 2  // global
// while(i<=5){
// console.log(i);
// i++
// }
// console.log(i);

// functions
// function hello (folan){
//     console.log("hello",folan)
// }

// hello("mohamed")

function getUserFriends (userName){
    // getting user friends
    const userFriends = "ahmed,mohamed,mostafa"
    return undefined
}

var friends = getUserFriends("yasser")
// console.log(friends);

// factorial
// 5 > 1*2*3*4*5
// 6 > 1*2*3*4*5*6

// var number = prompt("give me number")
// number = parseInt(number)

function calcFactorial (number){
    var result = 1
    for(var i=1;i<=number;i++){
      result = result * i
    }
    alert(result)
}
// calcFactorial(number)

// operators

// arithmitic operatotrs + - * /  %
// var x=2
// var y=21
// var z =y%x
// console.log(z);

// assignment operators
// var x = 100
var y = 10
// x = x + 50
// x +=50

// x = x - 50
// x -=50
// console.log(x);
// *= /= %=

// comparison operators 
// x==y
// x ===y
// !=
// !==
// >
// <=

// LOGICAL operators
// var x = 10 
// var y = 100
// if (x==10 && y == 10){
//     console.log("hello");
// }
// if (x==10 || y == 10){
//     console.log("hello");
// }
// if (x!=10){
//     console.log("hello");
// }

// objects
var userName = "mohamed"
var userAge = 20
var userMail= "aaaaa@aaa"

var userData = {
    name:"mohamed",
    userAge:20,
    userMail:"aaaa@ddd",
    isMarried:false,
    buyProduct:function(){
        // credit card
        // steps .....
    },
    display:function(){
        console.log(userData.name)
    }
} 

// access
// userData.name
// console.log(userData["isMarried"]);
// console.log(userData.display());




// looping throw object 
var product = {
    name:"iphone",
    price:50000,
    color:"red",
    isAvailable:true
}

for (var key in product){
    // console.log(product[key]);
}

// altering 
product.name = "samsung"
// console.log(product.name);

delete product.name
// console.log(product);



// var colors = ["red","blue","green"]

var amazonProducts = [
    {name:"iphone",price:50000},
    {name:"lap",price:5000},
    {name:"lap",price:5000},
    {name:"lap",price:5000},
    {name:"lap",price:5000},
    {name:"lap",price:5000},
    {name:"lap",price:5000},
    {name:"lap",price:5000},
]

// looping throw array 
// array 0    1       2    3
var x = [10,"mohamed",true,40]
// console.log(x[0]);  // 10
// console.log(x[1]);
// console.log(x[2]);
// console.log(x[3]);
for (var i=0; i<x.length ;i++){
// console.log("hello");
console.log(x[i]);
}