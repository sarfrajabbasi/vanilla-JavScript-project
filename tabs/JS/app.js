// select/target

const btns = document.querySelectorAll(".tab-btn");
const about = document.querySelector(".about")
const articles = document.querySelectorAll(".content")
// console.log(about)

about.addEventListener("click",function(e){
    // console.log(e.target);
    const id = e.target.dataset.id;
    // console.log(id);

if(id){
    // remove active from other buttons
    btns.forEach(function(btn){
        btn.classList.remove("active");
        e.target.classList.add("active");
    });

    //hide other articles
    articles.forEach(function(article){
        article.classList.remove("active")
    })
    const element = document.getElementById(id)
    // console.log(element);
    element.classList.add("active")
}


})