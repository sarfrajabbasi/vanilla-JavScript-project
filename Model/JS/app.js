// select modal-btn,modal-overlay,close-btn
const modalBtn = document.querySelector(".modal-btn")
const modalOverlay = document.querySelector(".modal-overlay")
const closeBtn = document.querySelector(".close-btn")

//listen for click events on modal-btn and close-btn
// when user clicks modal-btn add . OPEN-MODAL to modal-overlay
modalBtn.addEventListener("click",function(){
    modalOverlay.classList.add("open-modal")
    
})
// when user clicks modal-btn remove. OPEN-MODAL to modal-overlay

closeBtn.addEventListener("click",function(){
    modalOverlay.classList.remove("open-modal")

})