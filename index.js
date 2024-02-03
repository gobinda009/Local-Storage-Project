

document.querySelector("form").addEventListener("submit",(e)=>{
    e.preventDefault();
     const name = e.target.children[1].value;
    const  number = e.target.children[3].value;
     const vill = e.target.children[5].value;
    const city = e.target.children[7].value;
    localStorage.setItem("nameData",name);
    localStorage.setItem("number",number);
    localStorage.setItem("vill",vill);
    localStorage.setItem("city",city);
})

document.querySelector(".details").addEventListener("click",(e)=>{
    e.preventDefault();
   
    const name1 = localStorage.getItem("nameData");
    const number1 = localStorage.getItem("number");
    const vill1 = localStorage.getItem("vill");
    const city1 = localStorage.getItem("city");
    const displayD = document.querySelector(".display-details");
    displayD.innerHTML = "";
    
    const display = document.createElement("div");
    display.classList.add("result");
   
    

    display.innerHTML = `
    <span>Name : ${name1} </span>
    <br>
    <span>Mobile No. : ${number1} </span>
    <br>
    <span>Village : ${vill1} </span>
    <br>
    <span>City : ${city1} </span>
    `
   displayD.appendChild(display);
})