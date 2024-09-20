// string Methods
//it trimes the white space  from the string.

// trime method
// let msg= "        hello";
// msg.trim();
// console.log(msg);


// let password = prompt("Enter your password ");
// let newPassword = password.trim();
// console.log(newPassword);
// ------------------------------------------------------------------------------------
// toUpperCase Methods.
// let name ="nikhil";
// console.log(name.toUpperCase());

// toLowerCase Method.
// let name ="NIKHIL";
// console.log(name.toLowerCase());

// ------------------------------------------------------------------------------------

// Methods with aruguments indexOf

// let msg ="lLovecoding";
// console.log(msg.indexOf("coding"));

// ------------------------------------------------------------------------------------

// Method Chaining

// using one method after another. Order of execution will be left to right.

// let name = "   Nikhil "; /*I want to trime the white space and also want to convert in upper*/
// console.log(name.trim().toUpperCase());
// ------------------------------------------------------------------------------------

// Slice mehtod.
// Returns the part of the original string as new string.

// let name = "Gitsudaipur"
// console.log(name.slice(4,11));
// ------------------------------------------------------------------------------------

// Replace method.
// let msg = "Nikhil";
// console.log(msg.replace("Nikhil","You can.."));

// Repeat Method.
// let msg = "Nikhil ";
// console.log(msg.repeat(3));

// ------------------------------------------------------------------------------------
// Practice Qs
// trim and upperCase the given string.

// let msg = "  help!";
// console.log(msg.trim().toUpperCase());


//------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------

// Array (DSA)
// Liner collection of things.

// foromat of array
// let Students = ["Nikhil","OM","Rehan","JD"];
// console.log(Students);

//------------------------------------------------------------------------------------
// Visualizing the arry

// let nums = [1,2,3,4,5,6,7,8,9,10];
// console.log(nums[6]);
// console.log(typeof nums);
// we can also store differnt types of data in the array/

//------------------------------------------------------------------------------------
// Empty Array

// let emptyArray = [];
// console.log(emptyArray);

//------------------------------------------------------------------------------------

// Array can be mutable.

// let fruits = ["Orange","Apple","Mango","Banana"];
// fruits[3]="Mapple";
// console.log(fruits);

//------------------------------------------------------------------------------------

// Array Methods
//  Push :add to end.
// Pop : delete from end & return it .
// Unshift :add to start.
// Shift : delete from start & return it.
// --------------------------------------

//  Push :add to end.
// let carBrands =["BMW","Audi"];
// carBrands.push("Ford");
// console.log(carBrands); /*It adds at the end.*/

// -------------------------------------
// Pop : delete from end & return it .

// let carBrands =["BMW","Audi","Ford"];
// carBrands.pop();
// console.log(carBrands);/*It delete from the end.*/
// -----------------------------------------------------------------------------

// Unshift :add to start.

// let carBrands =["BMW","Audi"];
// carBrands.unshift("Ford");
// console.log(carBrands); /*It adds at the start.*/

//---------------------------------------

// Shift : delete from start & return it.

// let carBrands =["BMW","Audi"];
// carBrands.shift();
// console.log(carBrands); /*It delete at the start.*/
//---------------------------------------

// practice Qs.

// for the given start state of an array, change it to final from using methods.

// let start =["january","july","march","august"];
// start.shift();
// start.shift();
// console.log(start);
// ans -(2) ['march', 'august']
    
// start.unshift("june");
// start.unshift("july");
// console.log(start);

// (4) ['july', 'june', 'march', 'august']

//---------------------------------------

// Array methods

// indexOf 
// includes

// indexOf 

// let colors =["red","yellow","blue"];
// colors.indexOf("yellow");
// console.log(colors.indexOf("red"));

// includes

//  let colors = ["red","yellow","blue"];
//  colors.includes("red");
//  console.log( colors.includes("red"));
//  if it contains the serch array then it print true ,if not then it print false.
//---------------------------------------

// Concatenation of array

// let firstString  =["Nihil","Om","Rehan","Darshan"];
// let secondString = ["red","yellow","blue"];
// let ThirdString = ["R","Y","B"];

// firstString.concat(secondString);
// console.log(firstString.concat(secondString));
//---------------------------------------

// Reverse of array

// let Students  =["Nihil","Om","Rehan","Darshan"];
// console.log(Students);

// let newStudents=["Nihil","Om","Rehan","Darshan"];
// console.log(newStudents.reverse());

//------------------------------------------------------------------------------------
//  slice method

// let Students  =["Nihil","Om","Rehan","Darshan"];
// console.log(Students.slice());
//output-['Nihil', 'Om', 'Rehan', 'Darshan']

// let studentsFirst  =["Nihil","Om","Rehan","Darshan"];
// console.log(studentsFirst.slice(1,2));
//output- ['Om']

// let studentsSecond  =["Nihil","Om","Rehan","Darshan"];
// console.log(studentsSecond.slice());

//output-(2) ['Rehan', 'Darshan'] 

// let studentsSecond  =["Nihil","Om","Rehan","Darshan"];
// console.log(studentsSecond.slice(studentsSecond.length-1));

//output-['Darshan']

// let studentsSecond  =["Nihil","Om","Rehan","Darshan"];
// console.log(studentsSecond.slice(-3));

//output-['Om', 'Rehan', 'Darshan']

//------------------------------------------------------------------------------------
//  splice Method

// format :- splice :removes/replace/add element in place;

// splice(start,deleteCount,item0...itemN)

// let studentsSecond  =["Nihil","Om","Rehan","Darshan"];
// // console.log(studentsSecond); 
// studentsSecond.splice(0,1);
// console.log(studentsSecond.splice(0,1));
// console.log(studentsSecond);   

// ------------------------
// added
// let studentsSecond  =["Nihil","Om","Rehan","Darshan"];
// // console.log(studentsSecond); 
// studentsSecond.splice(0,0);
// console.log(studentsSecond.splice(1,0,"Charu","Vaishnav"));
// console.log(studentsSecond);   

// output-(6) ['Nihil', 'Charu', 'Vaishnav', 'Om', 'Rehan', 'Darshan']

// --------------------------

// Replace

// let studentsSecond  =["Nihil","Om","Rehan","Darshan"];
// // console.log(studentsSecond); 
// studentsSecond.splice(1,1,"Ompraksh");
// console.log(studentsSecond.splice(1,1,"Ompraksh"));
// console.log(studentsSecond); 

// output-['Nihil', 'Ompraksh', 'Rehan', 'Darshan']

// --------------------------

// short method

// let studentsSecond  =["Nihil","Om","Rehan","Darshan"];
// console.log(studentsSecond); 
// studentsSecond.sort();
// console.log(studentsSecond.sort())

// output- ['Darshan', 'Nihil', 'Om', 'Rehan']  (by default in Assending order)

//------------------------------------------------------------------------------------

// Practice Qs

// for the given start state of an array change it to final form using splice method.

// given
// start: ["jan","july","march","august"]
// final: ["july","june","march","august"]


// let start = ["jan","july","march","august"]
// start.splice(0,2,"july","june");
// console.log(start);
  
// output- ['july', 'june', 'march', 'august']
// ------

// let start = ["jan","july","march","august"]
// console.log("Before:-",start.indexOf("july"))
// start.reverse().indexOf("july");
// console.log("After:-",start.indexOf("july"));

// output:-Before:- 1
// 16.js:279 After:- 2

//-----------------------------------------------------------------------------

// Array refernace
// let array=['a','b','c','d'];
// let arrayCopy = array;
// console.log(arrayCopy);
// console.log(array);
// arrayCopy.pop('d');
// console.log(array);
// console.log(arrayCopy);

// oputput-(4) ['a', 'b', 'c', 'd']
// 16.js:290 (4) ['a', 'b', 'c', 'd']
// 16.js:292 (3) ['a', 'b', 'c']
// 16.js:293 (3) ['a', 'b', 'c']

//-------------------------------------------------------------------------------

// // Constant arry
// const array=['a','b','c','d'];
// let arrayCopy=['a','b','c','d'];
// // let arrayCopy = array;  (in this we can change the value of aaray but cannot change the address stored in the a)
// console.log(array);
// console.log(arrayCopy);
// --------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------











