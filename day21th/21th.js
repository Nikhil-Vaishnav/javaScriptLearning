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

// Reduce Method

//syntax- arr.reduce(reducer function with 2 variables for (accumulator,element));
// let num = [1,2,3,4];
// let finalValue = num.reduce((res,el)=>(res+el));

// output- 10        

// -------------------------------------------------

// let num = [1,2,3,4];
// let finalValue = num.reduce((res,el)=> {  //it has (accumulator,elemant)
//     console.log(res,el);
//     return res+el
// }
// );


//It is mostsly used for the sum of sum of whole arry.
// --------------------------------------------------------------

//Default Perameters

// function sum (a, b=5){
//     return a + b;
// }

// console.log(sum(2,3)); //it will add with given values.
// //output -5
// console.log(sum(2)); // it will add with deafult value. 
// //output -7

//note- we cannot give the first value default .ex (a=3, b);
// --------------------------------------------------------------
