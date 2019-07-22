$(document).ready(function() {
    $(".subscription a.sendCode").click(function() {
        $(".subscription .spinner-border").css("visibility", "visible").delay(5000).fadeOut();
    }
    );
    ////// second Owl Carousel ///////////
    $('.owl-carousel').owlCarousel( {
        loop:true, margin:40, responsiveClass:true, smartSpeed:600, responsive: {
            0: {
                items: 1, nav: true
            }
            , 600: {
                items: 1, nav: true
            }
            , 1000: {
                items: 3, nav: true, loop: true, dots: false
            }
        }
    }
    );
    //////////////////////////////////////
}

);