// function sum (x,y,z){
// console.log(x);
// console.log(y);
// console.log(z());
// }

// var func = function(){console.log("hello")}
// sum(10,[10,20],func)

// var func = function (){console.log("hello")}

// var numbers = [10, 20, 30, 40, 50];

// for (var i=0;i<numbers.length;i++){
// console.log(numbers[i]);
// }

var numbers = [20, 10, 50, 300, 40];
var colours = ["red","blue","brown","yellow"];
// forEach  map filter find some every
var callbackFn = function (item) {
//   console.log(item*2);
  return item*2
};
var callbackFn2 = function (item) {
 return item > 30
};

var result1 = numbers.forEach(callbackFn);
var result2 = numbers.map(callbackFn);
var result3 = numbers.filter(callbackFn2);
var result4 = numbers.some(callbackFn2);
var result5 = numbers.every(callbackFn2);
var result6 = numbers.find(callbackFn2)
var result7 = numbers.join(" * ")
var result8 = numbers.reverse()
var result9 = colours.sort()
;
// console.log(result9);
// how forEach is working
// var callbackFn = function(number,index,array){console.log(array)}
// function myForEach (callbackFn){
//     for (var i=0;i<numbers.length;i++){
//         callbackFn(numbers[i],i,numbers)
//     }
// }

// myForEach(callbackFn)




// vowels problem
// var word = prompt("word?")
// var word = "mohamed"
// word = word.split("")
// console.log(word);
// function countVowels (){
//     var vowles = "a,e,i,o,u,A,E,I,O,U"
//     var result = word.filter(function(item){
//       return vowles.includes(item)
//     })
//     console.log(result.length);
// }
// countVowels(word)


//////////////////////////////////////////////////////
// hoisting
// console.log(z)
// var z = 100


// var h = 10
// var h = 1000
// console.log(h);

// let const 
// console.log(z)
// const  z = 100

// const h = 10
// const h = 1000
// console.log(h);

// let age = 10
// age = 11
// console.log(age);

// let pi = 3.14
// const g = [10]

// // g = [10,100]
// g.push(100)


// one 
// hello()

// 
// function hello (){
//     console.log("hello");
// }


// two
// hello2()
// let hello2 = function  (){
//     console.log("hello22222");
// }


// numbers.map(function(){

// })



(
    function (){
        console.log("hello from self invoked");
    }
)()


// let user