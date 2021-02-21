const menuBtn = document.querySelector(".navbar-toggle");
const menuDiv = document.querySelector(".nav-menu");
const menuOverlay = document.querySelector(".overlay-menu");
const menuBorders = document.querySelector(".borders");

let menuOpen = false;

menuBtn.addEventListener("click", () => {
    if(!menuOpen) {
        menuBtn.classList.add('open');
        menuDiv.classList.replace('close-menu','open-menu');
        menuOverlay.classList.replace('close-menu-overlay','open-menu-overlay');
        menuBorders.classList.add('open-menu-borders');
        menuOpen = true;

    } else{
        menuBtn.classList.remove('open');
        menuDiv.classList.replace('open-menu','close-menu');
        menuOverlay.classList.replace('open-menu-overlay','close-menu-overlay');
        menuBorders.classList.remove('open-menu-borders');
        menuOpen = false;
    }
});

if(window.screen.width <= 768){

    window.addEventListener("load", () => {
        menuDiv.setAttribute("style", "width:" + (window.screen.width - 85) + "px;")
    });
    
    window.addEventListener("resize",() => {
        menuDiv.setAttribute("style", "width:" + (window.screen.width - 85) + "px;")
    });
};

