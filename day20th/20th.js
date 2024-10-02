// this:- This keyword is used refers to an object that is executing the 
// current piece of code.  

const student =
{
    name: "Nikhil",
    age: 22,
    English: 95,
    Hindi: 98,
    Maths: 40,
    science: 70,
    getAvg(){
        let avg =(this.Hindi + this.Maths + this.science +this.English )/4
        console.log(`${this.name} got ave marks=${avg}`);
    }
}