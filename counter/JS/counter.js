// set initial :---

let count = 0;

const value = document.querySelector("#value");

const btns = document.querySelectorAll(".btn");

//use array methods
btns.forEach(function eachBtn(btn){
    btn.addEventListener("click",function countChange(e){
        // classList
        const styles = e.currentTarget.classList;
        if(styles.contains("decrease")){
            count--
        }else if(styles.contains("increase")){
            count++
        }else{
            count = 0;
        }
        if(count >0){
            value.style.color = "green"
        }
        if(count <0){
            value.style.color = "red"
        }
        if(count == 0 ){
            value.style.color = "#222"
        }
        value.textContent = count

    })
})