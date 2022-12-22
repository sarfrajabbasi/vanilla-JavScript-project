//  Select the target

const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".nextBtn");
const prevBtn = document.querySelector(".prevBtn");
// console.log(nextBtn);
// console.log(prevBtn);
// itrate through sildes and multiply with 100 so it will be 100%,200% increament to left
slides.forEach(function(slide,index){
    slide.style.left = `${index*100}%`

})

let counter = 0;

nextBtn.addEventListener("click",function(){
    counter++;
    carousel()
    console.log("hello");
})
prevBtn.addEventListener("click",function(){
    counter--;
    carousel()
})

// function for events:------

function carousel(){

// runout of slides
// if(counter === slides.length){
//     counter =0
// }else if(counter <0){
//     counter = slides.length-1
// }

// working with buttons
if(counter <slides.length-1){
    // show
    nextBtn.style.display = "block"
}else{
    nextBtn.style.display = "none"
}
// prevBtn
if(counter >0){
    prevBtn.style.display = "block"
}else{
    prevBtn.style.display = "none"
}
slides.forEach(function(slide){
    slide.style.transform = `translateX(${-counter *100}%)`
})

}


// hide prevBtn use style.display = "none"
prevBtn.style.display ="none"