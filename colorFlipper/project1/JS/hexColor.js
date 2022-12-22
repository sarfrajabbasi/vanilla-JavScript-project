const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

//Event:--

btn.addEventListener("click",function hexColorChange(){

    // # with six-values(6)
    let hexColor = "#";

    //loop

    for(let i=0;i<6;i++){
        hexColor += hex[getRandomNum()]
    }
    document.body.style.backgroundColor = hexColor;
    color.textContent = hexColor

});

function getRandomNum(){
    return Math.floor(Math.random()*hex.length)
}