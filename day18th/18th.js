// Objects Literals: used to store keyed collections & complex entities.

// student 
//objects literals  

// name  "Nikhil" p2
// age   "23"  p1
// key    value  


// --------------------------------------------------------------------

// objects literals

// let student1 = {
//     name: "Nikhil",
//     age: "22",
//     year: "3rd"
// };

// let student2 = {
//     name: "Rehan",
//     age: "20",
//     year: "3rd"
// };

// --------------------------------------------------------------------

// How to GetValue from the literals .

// let student1 = {
//         name: "Nikhil",
//         age: "22",
//         year: "3rd"
//     };

    // how to get only age info from whole object.

    // syntax
    // obj["key"]

    // student1["name"]
    // student1.name
// --------------------------------------------------------------------

// How to Add/Update value in literals.

// let student1 = {
//         name: "Nikhil",
//         age: "22",
//         year: "3rd"
//     };

    // To update or add the value we sipmly us the
    // obj.key = "add"

    // student1.name="Om";

// --------------------------------------------------------------------

// to delete object

// we can use 

// let student1 = {
//         name: "Nikhil",
//         age: "22",
//         year: "3rd"
//     };
// // syntax 
// delete student1.name;

// output {age: '22', year: '3rd'}
// --------------------------------------------------------------------

// Nested objects or we can say Objects of Objects.

// let studentsInfo =
// {  
//     Naman: 
//         {
//         age: "20",
//         year: "3rd", 
//         },
//     Nikhil: 
//         {
//         age: "22",
//         year: "3rd",
//         },
//     Rehan: 
//         {
//         age: "20",  
//         year: "3rd",
//         },
//     Omprakash: 
//         {
//         age: "22",
//         year: "3rd",
//         },
// };
// --------------------------------------------------------------------

// Array of Objects.


// let studentsInfo =
// [

//     {   name: "Nikhil",
//         age: "20",
//         year: "3rd", 
//     },

//     {   name: "Omprakash",
//         age: "20",
//         year: "3rd", 
//     },
//     {   name: "Rehan",
//         age: "20",
//         year: "3rd", 
//     },
// ]        
// --------------------------------------------------------------------

// Genrating the random numbers for the Ludo Game.

//  Math.floor(Math.random()*10)+1;
// console.log(Math.floor(Math.random()*6)+1);
// --------------------------------------------------------------------
 
const max= prompt("Enter the no.");
const randomNO = Math.floor(Math.random()*max)+1;
// console.log(Math.floor(Math.random()*max)+1);
let guss=prompt("Guss the number");

while(true){
    if(guss =="quit"){
        console.log("Better luck Next Time..");
        break;
    }
    if(guss ==randomNO){
        console.log("You Won..",randomNO);
        break;
    }
    if{
        guss=prompt("try again..");
    }