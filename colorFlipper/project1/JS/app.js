const colors = ["yellow","green","red","rgba(133,122,200)","#f15025","pink"];

 const btn = document.getElementById("btn");
 const color = document.querySelector(".color");
 
 btn.addEventListener("click",function colorChange(){
    const randomNum = getRandomNumber();
    //  get random Number b/w 0-3
document.body.style.backgroundColor = colors[randomNum];
color.textContent = colors[randomNum];
 })

 function getRandomNumber(){
    return Math.floor(Math.random()*colors.length)
 }