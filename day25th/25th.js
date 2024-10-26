// call stack 

// function hello(){
//     console.log("1.form hello");
//     console.log("hello");
// }

// function demo(){
//     console.log("2.from demo ")
//     hello ();
// }

// console.log("3.calling demo fun");
// demo();
// console.log("done by");

// output-
// 3.calling demo fun
// 2.from demo 
// 1.form hello
// hello
// done by

// -------------------------------------------------------------------------

// Visualizaing the call Stack 

// function one(){
//     return 1;
// }

// function two(){
//     return one() + one();
// }

// function three(){
//     let ans = two()+one();
//     console.log(ans);
// }

// three();

// output- 3 

// -------------------------------------------------------------------------
//  BreakPoint- it work at on console , source where we can find the step by step debugging of the code.
 // -------------------------------------------------------------------------

//  JS is Single Threaded - it can only handle one task at a time .
//  for doing the asynchronous task it takes the help of the browser .
// browser are made on c++ so the can handle the multiple threading.

 // -------------------------------------------------------------------------
//  problems due to asynchornous nature of the js.

// callback hell 

// h1 = document.querySelector('h1');
// setTimeout(()=>{
//     h1.style.color = "red";
// },1000);

// setTimeout(()=>{
//     h1.style.color = "blue";
// },2000);

// setTimeout(()=>{
//     h1.style.color = "green";
// },3000);
/*this is the complex way to do this */
 // -------------------------------------------------------------------------

h1 = document.querySelector('h1');

function changeColor(color, delay,nextColorChange){
    setTimeout(()=>{
        h1.style.color = color;
       if (nextColorChange) nextColorChange();
    },delay);
}

changeColor("red",1000, ()=>{
    changeColor("blue",1000,()=>{
        changeColor("green",1000,()=>{
            changeColor("yellow",1000); 
        });
    });/*we nested each others into the functions */

});
// changeColor("green",1000);

/*so the above nesting too many fuction is called the callback hell problem. */