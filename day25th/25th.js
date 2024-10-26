// call stack 

function hello(){
    console.log("1.form hello");
    console.log("hello");
}

function demo(){
    console.log("2.from demo ")
    hello ();
}

console.log("3.calling demo fun");
demo();
console.log("done by");

// output-
// 3.calling demo fun
// 2.from demo 
// 1.form hello
// hello
// done by

// -------------------------------------------------------------------------

// Visualizaing the call Stack 

function one(){
    return 1;
}

function two(){
    return one() + one();
}

function three(){
    let ans = two()+one();
    console.log(ans);
}

three();

// output- 3 

// -------------------------------------------------------------------------
//  BreakPoint- it work at on console , source where we can find the step by step debugging of the code.
 // -------------------------------------------------------------------------
