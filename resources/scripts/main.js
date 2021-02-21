window.addEventListener("load", () => {

    const navMenu = document.querySelector(".nav-menu");

    let scroll_value = 0;
    let canScroll = true;

    window.addEventListener("mousewheel", (e) => {

        if(canScroll){

            
            canScroll = false;

            if(navMenu.classList.contains("close-menu")){
                
                if (e.deltaY > 0) {
                    if (scroll_value < 30) {
                        scroll_value += 1;
                    }
                } else {
                    if (scroll_value > 0) {
                        scroll_value -= 1;
                    }
                }

                animation(scroll_value);
    
            };
        };

        setTimeout(function(){
            canScroll = true;
        }, 1000);

    });

});
