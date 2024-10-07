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

console.dir(document.querySelector('h1'));
console.dir(document.querySelector("#descripton"));
console.dir(document.querySelector(".oldImg"));
// this are used for single element .


console.dir(document.querySelectorAll("div a"));//it is used for selectin all.
//----------------------------------------------------------------------------




