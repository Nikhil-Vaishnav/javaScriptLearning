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

let btn = document.querySelector('button');
btn.addEventListener("click",function(event){
    console.log(event);
    console.log("button clicked");
});

let input = document.querySelector('input');
input.addEventListener("keyup",function(){
    console.log("Key was relesed");
});/*this keyup will waite for the key relesed */

// KeyboardEvent - it shows the  events -code and key. in dir file.