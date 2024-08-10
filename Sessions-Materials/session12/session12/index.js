var emp1 = {
    name: "ahmed",
    age: 28,
    jobDesc: "engineer",
    basicSalary: 7000,
    relatives: [
        {
            name: "mohamed",
            relation: "son",
            age: 9
        },
        {
            name: "noha",
            relation: "daughter",
            age: 9
        },
        {
            name: "shimaa",
            relation: "wife",
            age: 25
        },
    ],
    hobbies: ["football", "chess"]
    ,
    calcSalary: function (x) {
        var netSalary = emp1.basicSalary + x
        return netSalary
    },
    calcVactions: function () {
        var netSalary = emp1.basicSalary + 500
        return netSalary
    }
}

// var emp2 = {
//     name: "mohamed",
//     age: 30,
//     jobDesc: "engineer",
//     basicSalary: 10000,
//     relatives: [
//         {
//             name: "mostafa",
//             relation: "son",
//             age: 9
//         },
//         {
//             name: "hadeer",
//             relation: "wife",
//             age: 25
//         },
//     ],
//     calcSalary: function () {
//         var netSalary = emp1.basicSalary + 500
//         return netSalary
//     },
//     calcVactions: function () {
//         var netSalary = emp1.basicSalary + 500
//         return netSalary
//     },
//     hobbies: ["football", "chess"]
// }

// var employees = [emp1, emp2]

// var emp1Relatives = employees[0].relatives

// var result = []
// for (var i = 0; i < emp1Relatives.length; i++) {

//     // console.table(emp1Relatives[i].name);
//     // console.table(emp1Relatives[i].relation);
//     result.push({
//         name: emp1Relatives[i].name
//         , reltation: emp1Relatives[i].relation
//     })
// }

// console.table(result);


// var products = []
// var merchants = []

// function addMirchant(){}
// function addProduct(){}

// built in objects
// var text = "hello world my name is mohamed"
// 
// console.log(text.length);   // 
// console.log(text.charAt(17));    
// console.log(text.toLocaleLowerCase());
// console.log(text.toLocaleUpperCase());
// console.log(text.includes("mohamed"));
// console.log(text.slice(0,4));
// console.log(text.indexOf("z"));
// console.log(text.split(" "));
// console.log(text.replaceAll("m",0));

// var words = text.split(" ")
// console.log(words);
// var longestWord = words[0]
// for (var i=0;i<words.length;i++){
// if (words[i].length>longestWord.length){
//     longestWord = words[i]
// }
// }

// console.log(longestWord);


// var numbers = [10,20,30]
// var numbers2 = [50,100]

// numbers.push(100)
// numbers.pop()

// numbers.unshift(50)
// numbers.shift()

// // var deleted = numbers.splice(0,2)
// var slice = numbers.slice(0,2)


// var result = numbers.concat(numbers2)



// var numbers = [10,20,30]

// for (var number of numbers){
//     console.log(number);
// }
// for (var index in numbers){
//     console.log(index);
// }


function one (x){
    x()

}


one(two)


function two (){
    console.log("hello from two");
}