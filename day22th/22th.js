// DOM (Document Object Model)
//The DOM represents a document with a logical tree.
//It allows us to manipulate/change webpages content (HTML elements).

// for accssing h1 heading we using- console.dir(document.all[7].innerText);
// document.all[7].innerText = "Peter Parker";

//----------------------------------------------------------------------------

// Selecting  Elements

//by using their id.
//getElementById - Return the element as an object or null(if not found)

// synatx - document.getElementId("id");

//--------------------------------------

// by using their classe.
//getElementByClassName- Return the element as an HTML Collection or Enpty collection (if not found).

// how we can accsses the multipe class with same name 
// document.getElementClassName("oldImg")[0];

// let smallImages = document.getElementsByClassName("oldImg");

// for(let i = 0; i < smallImages.length; i++){
//     smallImages[i].src = "imagees/sp2.jpeg";
//     console.log(`value of images no. ${i}is changed.`);
// }

//--------------------------------------
// by using their TagsNames.
// getElementByTagName - Return the element as an HTML Collection or Enpty collection (if not found).

// same as Classname 
//----------------------------------------------------------------------------

// Query selectors- allows us to use any CSS selector.

// // Syntax 
// document.querySelector('p'); //Selectors first p element
// document.querySelector('#myId');//Selects first element with id=myId
// document.querySelector('.myClass');//Selects all p element with class = myClass

// document.querySelectorAll("p");//Selects all p elements

// console.dir(document.querySelector('h1'));
// console.dir(document.querySelector("#descripton"));
// console.dir(document.querySelector(".oldImg"));
// // this are used for single element .


// console.dir(document.querySelectorAll("div a"));//it is used for selectin all.
//----------------------------------------------------------------------------

// Using Properties & Methods

//innerText- Shows the visible text contained in a node.

// textContent- Show all the full text.

// innerHtml - Show the full markup.

// let heading = document.querySelector('h1');//for selectin the h1.

// heading.innerHTML = `<u>${heading.innerText}<u>`;//it will put under line under h1.
//----------------------------------------------------------------------------

// Manipulating Attributes 
// ex  id, class, style, img, src.
//this is also known as getters and setters.

// Obj.getAttribute(attr)

// let img = document.querySelector('img');
// console.dir(document.querySelector('img'));
// console.log(img);

// console.log(img.getAttribute('id'));// to the current value for the id,
// img.setAttribute('id', 'spider');// it will assing a new name for the id.

/*note- it will damge our CSS due to changed in the id name through setAttribute so think befor you change it.*/

//----------------------------------------------------------------------------

//Manipulating style- style property.

// how to check styling property?
// let img = document.querySelector('img');


// console.dir(img);
// console.log(img.style);//for checking styling properties.


//let chang the style of the heading.

// let heading = document.querySelector('h1');

// console.log(heading.style);// to check the style property.

// heading.style.color = 'Red';
// heading.style.backgroundColor = 'blue';

// let links = document.querySelectorAll(".box  a");

// for(let i = 0; i < links.length; i++){
//     links[i].style.color = "yellow";
// }

// for(links of links){
//     links.style.color = "red";
// }

/* note - we not used this for stylig frequently CSS is the best for styling*/

//--------------------------------------------

//adding using classList

// Obj.classList

// let img = document.querySelector('img');
// console.log(img.classList);//for finding the class of the object. 

// let heading = document.querySelector('h1');

// heading.classList.add("red");
// console.log(heading.classList);
//--------------------------------------------
//removing using classList

// let heading = document.querySelector('h1');

// heading.classList.remove("red");
// console.log(heading.classList);

//--------------------------------------------

//check using classList
//to check whether the class is avilable or not.
// let heading = document.querySelector('h1');

// heading.classList.add("red");
// console.log(heading.classList);
// console.log(heading.classList.contains('red'));

// output - True 

//--------------------------------------------
// toggle 
// the main use of the toggle is that it firt checks the whether the class is prenst or not.
// If a class is presnt in that case it will remove the the that class and return fasle.
//IF a class is not presnt in that case it will add that class and print True.

// let heading = document.querySelector('h1');

// heading.classList.add("red");
// console.log(heading.classList);
// console.log(heading.classList.toggle('red'));// It will print false becaue the class is present.

// console.log(heading.classList.toggle('green'));// It will print true becaue the class is present.
//----------------------------------------------------------------------------

// Navigation 

//parentElement
//children
//previousElementSibling/ nextElementSibing

/*note- This used find the all of three form to html for better navigation */

//prarentElement

// let h4 = document.querySelector('h4');
//  console.log(h4.parentElement);

//  let box = document.querySelector('.box');
//  console.log(box.children); 
 // or we call also use the childElenemtCount for the count of total children present.

//--------------------------------------------

 //previousElementSibling/ nextElementSibing


//  let ul = document.querySelector("ul");

//  console.log(ul.children[1].previousElementSibling);//for the pervious

//  console.log(ul.children[1].nextElementSibling);//for next
//----------------------------------------------------------------------------

// AddingElement on page

//document.createElement('p');

//afte creating the element know we want to add it into main body for it we will used further option given  blow.

//appendChild(element)
//append(element)
//prepend(element)
//insertAdjecent(where, element)

//--------------------------------

//appendChild()
// document.createElement('p');
// let newP = document.createElement('p');

// console.log(newP);
// newP.innerText = "Hi its wtiten form the javaScript.";


// let newP = document.querySelector('p');

// newP.appendChild(newP);//it will print at bottom of the page due to body

// let box = document.querySelector('.box');

// let btn = document.createElement('button');

// btn.innerText = "Click me!";

// console.log(box.appendChild(btn));// created the button for the box .
//----------------------------------------------------------------------------
//----------------------------------------------------------------------------

// append - by using it we can directly make changes or edits into appendChild .

// document.createElement('p');
// let newP = document.createElement('p');
// let btn = document.createElement('button');
// btn.innerText = "Click me!";
// console.log(newP.appendChild(btn));// created the button for the box .



// console.log(newP.append(btn));
// document.createElement('p');
// let newP = document.createElement('p');
// let newP=document.querySelector('p');
// let box = document.querySelector('.box');

// let btn = document.createElement('button');

// btn.innerText = "Click me!";

// document.createElement('button');
// let btn = document.createElement('button');
// btn.innerText = "click";

// newP.appendChild(btn);
// newP.appendChild(btn);


//----------------------------------------------------------------------------
//----------------------------------------------------------------------------

document.createElement('p');
let newP = document.createElement('p');
newP.innerText = "hello, I am Spider..";
console.dir(newP);

/* now we are using appendChild(element)*/
// let body = document.querySelector('body');/*body is parent for it and newP is child.*/
// body.appendChild(newP);/*it append at the bottom of the body.*/.

/*now we to appnend the child in the box */

let box = document.querySelector('.box');
// box.appendChild(newP);/*it will be print at the bottom of the box. */

/*let create a button */

let btn = document.createElement('button');
btn.innerText = "click me";
box.appendChild('btn');