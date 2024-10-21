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

let p = document.querySelector('p');

p.addEventListener("click", function(){
    console.log("parah was clicked");
});