let gameSeq = [];
let userSeq = [];
let btns = ["red","green","purple","yellow"];

let started = false;
let level = 0;
let h2 = document.querySelector("h2");

document.addEventListener("keypress",function(){
    if (started == false){
        console.log("Game is Stared");
        started = true;    
    }

    levelUp();
});  

function btnFlash(btn){
  btn.classList.add("flash");
  setTimeout(function(){
    btn.classList.remove("flash");
  },250); 
}

function levelUp(){
    level++;
    h2.innerText = `Level ${level}`;  
let randIdx = Math.floor(Math.random()*3);
let randColor = btns[randIdx];
let randBtn = document.querySelector(`.${randColor}`)
    // random btn choose
    console.log(randBtn);
    console.log(randColor);
    console.log(randIdx);
    btnFlash(randBtn);
}