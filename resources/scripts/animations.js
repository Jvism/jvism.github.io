function animation(scroll_value){

    const bgApp = document.querySelector(".bg-app");
    const titleApp = document.querySelector(".title-app");
    const aboutMe = document.querySelector(".about-me");
    const scrollIcon = document.querySelector(".scroll"); 

    if(scroll_value == 0){
        bgApp.setAttribute("style", "width: 50vw;");
        titleApp.setAttribute("style", "transform: translateX(0);");
        aboutMe.setAttribute("style", "transform: translateY(20%);");
        scrollIcon.setAttribute("style", "opacity: 1; transition-delay: 500ms;");
    };

    if(scroll_value == 1){
        bgApp.setAttribute("style", "width: 100vw;");
        titleApp.setAttribute("style", "transform: translateX(70%);");
        aboutMe.setAttribute("style", "transform: translateY(0); transition-delay: 500ms; opacity: 1;");
        scrollIcon.setAttribute("style", "opacity: 0; transition-delay: 0ms;");
    };
};