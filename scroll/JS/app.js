// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels


// ********** set date ************
const date = document.getElementById("date");
console.log(date);
date.innerHTML = new Date()
.getFullYear();


// ********** close links ************
const navToggle =document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

navToggle.addEventListener("click",function(){
    // linksContainer.classList.toggle("show-links");

    const linksHeight = links.getBoundingClientRect().height;
    console.log(linksHeight);
    const containerHeight =linksContainer.getBoundingClientRect().height;
    console.log(containerHeight);

    if(containerHeight === 0){
        // inline css
        linksContainer.style.height = `${linksHeight}px`;
    }else{
        linksContainer.style.height = 0
    }
})
// ********** fixed navbar ************
const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");
console.log(topLink);

// add event in window
window.addEventListener('scroll',function(){
    // console.log(window.pageYOffset);
    const scrollHeight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;
    // console.log(scrollHeight);
    // console.log(navHeight);

    //  if scrollHeight is greater then navHeight
    if(scrollHeight>navHeight){
        navbar.classList.add('fixed-nav')
    }else{
        navbar.classList.remove('fixed-nav')
    }
    // setup back to top link
    if(scrollHeight >500){
        // console.log("hello");
        topLink.classList.add('show-link')
    }else{
        topLink.classList.remove('show-link')
    }
})
// ********** smooth scroll ************
// select links

const scrollLinks = document.querySelectorAll('.scroll-link')
// console.log(scrollLinks);

scrollLinks.forEach(function(link){
  
        link.addEventListener("click",function(e){
            // prevent default
            e.preventDefault()
            
            // naviagte to specific spot
            
            const id = e.currentTarget.getAttribute("href").slice(1)
            // section will show  just below the navbar
            // console.log(id);
            const element = document.getElementById(id);
            // calculate the heights
            const navHeight = navbar.getBoundingClientRect().height;
            const containerHeight2 = linksContainer.getBoundingClientRect().height;
            const fixedNav = navbar.classList.contains("fixed-nav");
            let position = element.offsetTop-navHeight;
            console.log(position);

            if(!fixedNav){
                position = position-navHeight;
            }
            if(navHeight >82){
                position = position + containerHeight2;
            }
        
            window.scrollTo({
                left :0,
                top:position,
            })
            linksContainer.style.height = 0
        })
})