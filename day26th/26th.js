// Async Function - async & wait.

// async function greet (){
//     return "HELLO";
// }/*this will by default create the promise */
// -------------------------------------------------------------------------------------------

// async function greet (){
//     // Abc.abc();/**this will genertare error in rejected promise */
//     return "HELLO";  
// }

// greet()
// .then((result) =>{
//     console.log("promise was resolved");
//     console.log(result);
// })
// .catch((error) => {
//     console.log("promise was rejected");
//     console.log(error);
// });
// -------------------------------------------------------------------------------------------

// async function greet (){
//     throw "404 page not found"
//     return "HELLO";  
// }

// greet()
// .then((result) =>{
//     console.log("promise was resolved");
//     console.log(result);
// })
// .catch((error) => {
//     console.log("promise was rejected");
//     console.log(error);
// });
// -------------------------------------------------------------------------------------------

// we can also create the async method on the arrow function 

// let demo = async () => {
//     return 5;
// };
// -------------------------------------------------------------------------------------------

// Await keyword - pauses the execution of its surrounding async function until the pormise is settled(resolved or rejected).

// function getNum(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let num = Math.floor(Math.random()*10) + 1;
//             console.log(num);
//             resolve(); 
//         }, 1000);
//     });
// }

// async function demo() {
//     getNum();
// }

// --------------------------------------------------------------
// Now i want to print 5 random Number by dealy 1000 so for the we will be using the await function

// function getNum(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let num = Math.floor(Math.random()*10) + 1;
//             console.log(num);
//             resolve(); 
//         }, 1000);
//     });
// }

// async function demo() {/*note - await function only work with async method*/
//   await getNum();
//   await getNum();
//   await getNum();
//   await getNum();
//   await getNum();
// }

// --------------------------------------------------------------
// changing the color of h1 using async and await to remove callback hell.
// h1 = document.querySelector("h1");

// function changeColor(color, delay,){
//     return new Promise((resolve , reject ) =>   {
//         setTimeout(() => {
//             h1.style.color = color;
//             console.log(`color changed to ${color}!`);
//             resolve("color changed");
//         },delay);
//     });
// }


// async function demo() {
//     await changeColor("red", 1000);
//     await changeColor("green", 1000);
//     await changeColor("blue", 1000);
//     await changeColor("yellow", 1000);
//     await changeColor("orange ", 1000);
// }
// --------------------------------------------------------------

// h1 = document.querySelector("h1");

// function changeColor(color, delay,){
//     return new Promise((resolve , reject ) =>   {
//         setTimeout(() => {
//             let num = Math.floor(Math.random()*5)+1;
//             if (num > 3){
//                 reject("pormise rejected");
//             }
//             h1.style.color = color;
//             console.log(`color changed to ${color}!`);
//             resolve("color changed");
//         },delay);
//     });
// }

// --------------------------------------------------------------

// by using try & catch 
// async function demo() {
//     try{/*in a case any promise get rejected then also following process will not be affected*/
//         await changeColor("red", 1000);
//     await changeColor("green", 1000);
//     await changeColor("blue", 1000);
//     await changeColor("yellow", 1000);
//     await changeColor("orange ", 1000);

//     }catch(error){
//         console.log("error founnd");
//         console.log(error);
//     }/*it will print the  error */
//     let a = 5;
//         console.log(a); 
//         console.log("New number = ", a + 3);
// }
// -------------------------------------------------------------------------------------------
