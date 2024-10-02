// this:- This keyword is used refers to an object that is executing the 
// current piece of code.  

// const student =
// {
//     name: "Nikhil",
//     age: 22,
//     English: 95,
//     Hindi: 98,
//     Maths: 40,
//     science: 70,
//     getAvg(){
//         let avg =(this.Hindi + this.Maths + this.science +this.English )/4
//         console.log(`${this.name} got ave marks=${avg}`);
//     }
// }
// -------------------------------------------------------------------------------------

// const student =
// {
//     name: "Nikhil",
//     age: 22,
//     English: 95,
//     Hindi: 98,
//     Maths: 40,
//     science: 70,
//     getAvg(){
//         console.log(this);
//         let avg =(this.Hindi + this.Maths + this.science +this.English )/4
//         console.log(`${this.name} got ave marks=${avg}`);
//     }
// }
// -------------------------------------------------------------------------------------
// Try and Catch 
// The Try statement allows you to define a bolck of code to be tested for errors while it is being executed.

// The catch statement allows you to define a block of code to be executed, if an error occures in the try block.

// syantax:
// try { 
//     console.log(a);
// }catch{
//     console.log("varible a doest't");
// }
// ---------------------------------------------------

// console.log("Nikhil");
// console.log("Vaishnav");
// try{
//     console.log(a);// a is not defin so it will genrate the error but we have used catch for this.
// }catch{
//     console.log("a is not defined in code");//this line will be print 
// }
// console.log("Nikhil Vaishnav");
// -------------------------------------------------------------------------------------

// Arrow fucnction
//  const sum = (a,b) => {
//     console.log(a+b); 
//  }
// -------------------------------
// const hello = () =>{  // not needed to write any thing in () incase of single arrgumenst.
//     console.log("Hello Nikhil");
// }
// -------------------------------------------------------------------------------------

// implicit return in arrow fuction 

// it us used to make automatic return value.

// const mul = (a,b) =>(
//     a*b
// );
// ------------------------

// const sum = (a,b) => (
//          a+b 
// );
// -------------------------------------------------------------------------------------

// setTimeout function

//syntax:
// setTimeout(function,time);
// console.log("Hii");

// setTimeout(()=>{
//     console.log("From Nikhil..");
// },3000);
// -------------------------------------------------------------------------------------

//setInterval function

//syntax:
// setInterval(function,time);
// onsole.log("Hii");

// setInterval(() => {
//     console.log("from Nikhil..");
// },2000);
// ----------------------------------


// console.log("Hii");

// let  id =setInterval(() => {
//     console.log("from Nikhil..");
// },2000);

// let  id2 =setInterval(() => {
//     console.log("from Nikhil..");
// },3000);

// console.log(id);
// console.log(id);
// clearInterval(id); // to stop the call
// -------------------------------------------------------------------------------------
