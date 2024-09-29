// function

// // creating a function 
// function MyName (){
//     console.log("Nikhil");
// }

// // calling of the function
// MyName(); 
// -------------------------------------------------------------------------------------

// rollDice

// function rollDice()
// {
//      let random=Math.floor(Math.random()*10)+1;
//      console.log(Math.floor(Math.random()*6)+1)
// };

// rollDice();
// -------------------------------------------------------------------------------------

// functions with argument

// function sum(a,b)
// {
//     console.log(a+b);
// }

// sum(12,4);
// sum(23,25);

// // output - 16 , 48
// -------------------------------------------------------------------------------------
// Average of three Number  

// function avrage(a,b,c)
// {
//    let ave=(a+b+c)/3;
//    console.log(Math.floor(ave));
// }

// avrage(12,12,23);

// -------------------------------------------------------------------------------------

// function table(n){
// for( let i=n; i<=n*10; i=i+n){
//     console.log(i);
// }
// }

// table(4);

// -------------------------------------------------------------------------------------

// return function.

// function sum(a,b)
// {
//  return(a+b);
// }

// console.log(sum(12,13));

// -------------------------------------------------------------------------------------


// Scope 

// let sum= 20; //Global Scope

// function calSum(a,b){
//     // let sum = a+b; //Function Scope
//     console.log(sum);
//     
// }

// calSum(1,2);
// console.log(sum);

// -------------------------------------------------------------------------------------

// Block scope 

// for(let i=1; i<=5;i++){
//     console.log(i); //block scope.  
//     // It only print the inside the block not the out side of the block
// }
// -------------------------------------------------------------------------------------

// Laxilcal Functions

// function outerFunc(){
//     let x = 5;
//     let y = 6;
//     function innerFunc(){
//         console.log(x);
//         console.log(y);
//     }
//     innerFunc();
// }

// console.log(outerFunc());

// -------------------------------------------------------------------------------------
//  Practice Qs 

// let greet ="Hello";

// function changeGreet(){
//     let greet= "namaste";
//     console.log(greet);

//     function innerGreet(){
//     console.log(greet); //laxical scope;
//     }
//     innerGreet();
// }

// console.log(greet);
// changeGreet();

// -------------------------------------------------------------------------------------
 
// Function expressions

// let sum = function(a,b){ // we can create a varible for the functions.
//     return(a+b);
// }
// console.log(sum(1,2));
// -------------------------------------------------------------------------------------


