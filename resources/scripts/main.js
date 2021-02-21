window.addEventListener("load", () => {

    const navMenu = document.querySelector(".nav-menu");

    let scroll_value = 0;
    var canScroll = true;

    // variables deteccion de arrastre

    let startTouch = 0;
    let endTouch = 0;

    function scroll(boolScroll,value){

        if(boolScroll){

            canScroll = false;

            if(navMenu.classList.contains("close-menu")){
                
                if (value > 0) {
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
    }

    window.addEventListener("touchstart", (e) => {

        startTouch = e.changedTouches[0].screenY;

        window.addEventListener("touchend", (a) => {
            endTouch = a.changedTouches[0].screenY;
        });

        let direction_touchMove = startTouch - endTouch;

        if(direction_touchMove > 100 || direction_touchMove < -100){

            scroll(canScroll,direction_touchMove);
        }

    });


    window.addEventListener("mousewheel", (e) => {

        scroll(canScroll,e.deltaY);

    });

});
