// Array Methods

// 1.forEach
// 2.map 
// 3.filter
// 4.some
// 5.every
// 6.reduce

// --------------------------------------------------------------

// 1.forEach

// let arr = [1,2,3,4,5];

// let print = function (el){
//     console.log(el);
// };

// arr.forEach(print);

// ---------------------------

// Using arrow function
// let arr = [1,2,3,4,5];

// arr.forEach((el)=>{
//     console.log(el);
// })

// ---------------------------

// by adding objects

// let arr = [
//     {
//         name: "Nikhil",
//         age:  22,
//     },
//     {
//         name: "Rehan",
//         age:  20,
//     },
//     {
//         name: "Omprakash",
//         age:  22,
//     },
// ];

// arr.forEach((student)=> {
//     console.log(student.age);
// })
// --------------------------------------------------------------

// Map function 

//Syntax:
// let newArr = arr.map(some function definiton or name);


// --------------------------------------------------------------
// let student = [
//          {
//         name: "Nikhil",
//         marks:  22,
//     },
//     {
//         name: "Rehan",
//         marks:  20,
//     },
//     {
//         name: "Omprakash",
//         marks:  22,
//     },
// ];

// let gpa = student.map((el)=>{
//     return el.marks / 10;
// });
// --------------------------------------------------------------

// Filter function

//Syntax:
// let newArr = arr.filter(some function definiton or name);

// let num = [1,2,3,4,5,6,7,8,9,10];

// let ans = num.filter((el)=>{ // it print the arry if the condtion is true.
//     return el % 2 == 0;
// });

//output - (5) [2, 4, 6, 8, 10]

// --------------------------------------------------------------
