function animation(scroll_value){

    const bgApp = document.querySelector(".bg-app");
    const titleApp = document.querySelector(".title-app");

    if(scroll_value == 0){
        bgApp.setAttribute("style", "width: 50vw;")
    };

    if(scroll_value == 1){
        bgApp.setAttribute("style", "width: 100vw;")
    };
};