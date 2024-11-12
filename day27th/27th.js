
let url = "https://catfact.ninja/fact";

let btn = document.querySelector("button");
btn.addEventListener("click", async () =>{
    // console.log("button was clicked");
    let fact = await getfact();
    // console.log(fact);

    let p = document.querySelector("#result");
    p.innerText = fact;

});


// using Axios 
async function  getfact(){
  try{
    let res = await axios.get(url);
    // let data = await res.json();/*we do not want this line because it diretclty convert the json to java object */
    return res.data.fact;
      
  }catch(error){
    // console.log("Error",error); 
    return "No fact found"
  }
}
// console.log(getfact());