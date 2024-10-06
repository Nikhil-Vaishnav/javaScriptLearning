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

