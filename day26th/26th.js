// Async Function - async & wait.

async function greet (){
    return "HELLO";
}/*this will by default create the promise */
// -------------------------------------------------------

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
