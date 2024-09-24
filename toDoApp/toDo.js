let toDo =[];

let req = prompt("Enter the your request");
// console.log(req);

while(true){
    if (req == "quit"){
        console.log("Quitting app");
        break;
    }


if(req == "list") {
    console.log("---------");
    for(task of toDo){
        console.log(task);
    }
    console.log("-----------");
}
else if(req == "add"){
    let task = prompt("Please enter the task you want to add");
    toDo.push(task);
    console.log("task added");
}
let req = prompt("Enter the your request");

}  