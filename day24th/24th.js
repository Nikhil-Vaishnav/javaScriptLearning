/* EventBulbbling - in this a nested element print.
  so event bubbling is used to stop that printing of the nested element.*/

// let div = document.querySelector("div");
// let  ul = document.querySelector("ul" );
// let  li = document.querySelector("li" );

// div.addEventListener("click",function(){
//     console.log("div was print");
// });
// ul.addEventListener("click",function(){
//     console.log("ul was print");
// });
// li.addEventListener("click",function(){
//     console.log("list was print");
// });

/*above code has the problem of the event bubling*/
// -------------------------------

// resoveld by using the event bubling

let div = document.querySelector("div");
let  ul = document.querySelector("ul" );
let  li = document.querySelector("li" );

div.addEventListener("click",function(event){
    event.stopPropagation();/*it is the method to stop the event bubbling probelem */
    console.log("div was print");
});
ul.addEventListener("click",function(event){
    event.stopPropagation();/*it is the method to stop the event bubbling probelem */
    console.log("ul was print");
});
li.addEventListener("click",function(event){
    event.stopPropagation();/*it is the method to stop the event bubbling probelem */
    console.log("list was print");
});