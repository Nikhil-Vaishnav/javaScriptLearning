// DOM Events-Events are signals that something has occured.(input/actions).

// onclick(when an element is clicked)

// let btn = document.querySelectorAll('button');

// btn.onclick= function(){
//     console.log("the button was click")
// };

// btn.onclick= function(){
//     alert("the button was click")
// };
// -------------------------------------------------------------------------------
//  for the many buttons at the same time by using querySelectorAll.
// let btn = document.querySelectorAll('button');

// for (btn of btn){
//     btn.onclick=sayhello;

// }
// function sayhello(){
//     alert("hello"); 
// }
// btn.onclick=sayhello;
// -------------------------------------------------------------------------------

// onmouseenter(when mouse enters an elemnt)

// let btn = document.querySelectorAll('button');

// for (btn of btn){
//     btn.onclick=sayhello;
//     btn.onmouseenter = sayhello;
// }
// function sayhello(){
//     console.log("hello"); 
// }
// btn.onclick=sayhello;
// -------------------------------------------------------------------------------
// Event Listener - used to print the multiple function .
// document.querySelectorAll('button');
// let btn = document.querySelectorAll('button');
// element.addEventListener(event,callback);

// for(btn of btn){
//     btn.addEventListener("click",hello);
//     btn.addEventListener("dblclick",Names);
// };

// function hello(){
//     console.log("hellow everyone..");
// };

// function Names(){
//     console.log("Nikhil Vaishnav");
// };
// -------------------------------------------------------------------------------

// EventsLister for the Elements 

// let p = document.querySelector('p');

// p.addEventListener("click", function(){
//     console.log("parah was clicked");
// });

// -------------------------------------------------------------------------------

// this function 
// let btn = document.querySelector('button');
// // let bt = document.querySelector('button');

// let p = document.querySelector('p');
// let h3 = document.querySelector('h3');


// function  changeColor(){
//   console.log(this.innerText);
//   this.style.backgroundColor = "blue";
// };

// btn.addEventListener("click",changeColor);
// // bt.addEventListener("click",changeColor);

// p.addEventListener("click",changeColor);
// h3.addEventListener("click",changeColor);
// -------------------------------------------------------------------------------

// KeyboardEvent 

// let btn = document.querySelector('button');
// btn.addEventListener("click",function(event){
//     console.log(event);
//     console.log("button clicked");
// });

// let input = document.querySelector('input');
// input.addEventListener("keyup",function(){
//     console.log(event.key);/*it will show the key */
//     console.log(event.code);/*it will show the code */
//     console.log("Key was relesed");
// });/*this keyup will waite for the key relesed */

// KeyboardEvent - it shows the  events -code and key. in dir file.

// -------------------------------------------------------------------------------

// form js username ones...
 
// let form = document.querySelector('form');

// form.addEventListener("submit"/*submit is the element to sumbit the form*/,function(event/*it is used for staying of the page*/){
//     event.preventDefault();/*it prevet the page to go on the action */
//     alert("Submited");
// })
// -------------------------------------------------------------------------------

// Extracting Form Data 


// let form = document.querySelector('form');

// form.addEventListener("submit"/*submit is the element to sumbit the form*/,function(event/*it is used for staying of the page*/){
//     event.preventDefault();/*it prevet the page to go on the action */
//     alert("Submited");

//     let inp = document.querySelector("#username");
//     let password = document.querySelector("#password");

//       console.dir(inp);
//       console.log(inp.value);/*the attrribute "value" will extract the data and diplay in the console */
//       console.log(password.value);/*the attrribute "value" will extract the data of password and diplay on console */
// })


// --------
// by using this 

// let form = document.querySelector('form');

// form.addEventListener("submit"/*submit is the element to sumbit the form*/,function(event/*it is used for staying of the page*/){
//     event.preventDefault();/*it prevet the page to go on the action */
//     alert("Submited");

//     let username = this.elements[0];
//     let password = this.elements[1];
//     //   console.dir(inp);
//       console.log(inp.value);/*the attrribute "value" will extract the data and diplay in the console */
//       console.log(password.value);/*the attrribute "value" will extract the data of password and diplay on console */
// })
// -------------------------------------------------------------------------------
// in this we are using the change evnet to track the small inputs.

// let inp = document.querySelector("#text");
// let p = document.querySelector("p");

// inp.addEventListener("input",function(){
//     console.log(inp.value);
//     p.innerText = inp.value;
// });
// -------------------------------------------------------------------------------
                           //END
// -------------------------------------------------------------------------------
