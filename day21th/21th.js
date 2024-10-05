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

// Spread
// syntax-  (...abc);

// let arr =[1,2,3,4,5,6];
// console.log(arr);
// //output [1, 2, 3, 4, 5, 6]

// //where as using spread 
// console.log(...arr);
// //output -1 2 3 4 5 6  //we get spreated value for it.

// console.log("NIKHIL");
// //output-NIKHIL

// console.log(..."NIKHIL");
// // output -N I K H I L
// --------------------------------------------------------------
// Spread in literal

// let arr = [1,2,3,4,5,6];

// let newArr = [...arr];
// console.log(...newArr);
// ---------------------------------

// let odd = [1,3,5,7,9];
// let even = [2,4,6,8,10];

// let both = [...odd, ...even];

// console.log(...both);

//output - 1 3 5 7 9 2 4 6 8 10
// --------------------------------------------------------------

// Spread in Object literal.

// let data ={
//     email: "nikhilvaishnav@gmail.com",
//     password: "12345"
// };

// let dataCopy = {...data, id: 1234};
// --------------------------------------------------------------

//Rest 
// It allows a function to take an indefinite  number of argument  and  bundle  them in an arry.
//oppsite of Spread function.


// --------------------------------------------------------------
// Destructuring 
// let names = ["Nikhil","OM","Rehan","Darshan","Jay","Dev","Som"];

// let [winner, runnerUp, secondRunnerUp, ...others] = names;
// // console.log(`${"winner"}winner);
// console.log(winner);
// console.log(runnerUp);
// console.log(secondRunnerUp);
// console.log (others);//it prints all the other due to "...other".
// --------------------------------------------------------------

// Destructuring in Objects.

// let studenDetails = {
//     name:"Nikhil",
//     class:12,
//     age:17,
//     rollNo:21,
//     city:"Bali"
// };
// //  now we want to print only the age name and rollNo of the student then,

// let { name:usersName, rollNo:newRoll, city="Udaipur"} = studenDetails;
// console.log(usersName);
// console.log(newRoll);
// console.log(city);//in case of a student do not fill the city opiton than by default Udaipur will be printed,

// --------------------------------------------------------------
                        //   END 
// --------------------------------------------------------------
