//jq
$( function() {

$('.counter').counterUp({
    delay: 10,
    time: 1000
});

$("#counter1").countMe(5,10);
$("#counter2").countMe(5,10);
$("#counter3").countMe(5,10);

$(".num").numScroll({

    number: 123456});

$('.js-preloader').preloadinator({

  minTime: 2000

});

$('.wrapper').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1
});

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
});
/**
     * Demo 1
     */
    var arc = function (t)
    {
        return {
            x: 500.0 + 300.0 * Math.cos(2.0 * Math.PI * t - 0.5 * Math.PI),
            y: 400.0 + 300.0 * Math.sin(2.0 * Math.PI * t - 0.5 * Math.PI)
        };
    };

    $('#text1').curvedText({
        curve:    arc,
        domain:   [-0.2, 0.2],
        viewport: { x: 0.0, y: 0.0, width: 1000.0, height: 400.0 }
    });




//mixitup
var mixer = mixitup('#hello', {
    animation: {
        duration: 300
      }
});

//lightbox
lightbox.option({
      'resizeDuration': 200,
      'wrapAround': true
    });

});





















//js
//wow
  wow = new WOW(
             {
            boxClass:     'wow',      // default
animateClass: 'animated', // default
        
           mobile:       true,       // default
         live:         true        // default 
     }
    )            
wow.init();

//aos
AOS.init();
