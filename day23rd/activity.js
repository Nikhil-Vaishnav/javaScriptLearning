let btn = document.querySelector('button');
btn.addEventListener("click",function(){
    let h3 = document.querySelector('h3'); 
    let randomColor = getRandomColor();
    h3.innerText = randomColor;

    console.log("color updated");
 
    console.log("random no.");/*it will gernrat the random no. */

    let div = document.querySelector('div');
    div.style.backgroundColor = randomColor;
});

// let create a function that gernrat the random no. 

function getRandomColor(){
    let red = Math.floor(Math.random()*225);
    let green = Math.floor(Math.random()*225);
    let blue = Math.floor(Math.random()*225);

    let color = `RGB(${red},${blue},${green})` 
    return color; 
}