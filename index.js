
const primaryNav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");
const body = document.querySelector("body");

const container = document.querySelector(".container");



navToggle.addEventListener('click', ()=>{
    const visibility = primaryNav.getAttribute('data-visible');
    
    if(visibility === "false"){
        primaryNav.setAttribute('data-visible', "true")
        navToggle.setAttribute("aria-expanded", "true")
        container.classList.add("blurBody");
        body.classList.add("blurBody");
    }else{
        primaryNav.setAttribute("data-visible", "false");
        navToggle.setAttribute("aria-expanded", "fasle");
        container.classList.remove("blurBody");
        body.classList.remove("blurBody");
    }
})