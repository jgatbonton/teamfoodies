(function ($) {

  "use strict";

    // PRE LOADER
    $(window).load(function(){
      $('.preloader').fadeOut(1000); // set duration in brackets    
    });
    

    // MENU
    // NOT SURE IF WE'LL WANT TO USE THIS
    $('.navbar-collapse a').on('click',function(){
      $(".navbar-collapse").collapse('hide');
    });

    $(window).scroll(function() {
      if ($(".navbar").offset().top > 30) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
          } else {
            $(".navbar-fixed-top").removeClass("top-nav-collapse");
          }
    });
    

    // PARALLAX EFFECT
    $.stellar({
      horizontalScrolling: false,
    }); 


    // MAGNIFIC POPUP
    $('.image-popup').magnificPopup({
        type: 'image',
        removalDelay: 300,
        mainClass: 'mfp-with-zoom',
        gallery:{
          enabled:true
        },
        zoom: {
        enabled: true, // By default it's false, so don't forget to enable it

        duration: 300, // duration of the effect, in milliseconds
        easing: 'ease-in-out', // CSS transition easing function

        // The "opener" function should return the element from which popup will be zoomed in
        // and to which popup will be scaled down
        // By defailt it looks for an image tag:
        opener: function(openerElement) {
        // openerElement is the element on which popup was initialized, in this case its <a> tag
        // you don't need to add "opener" option if this code matches your needs, it's defailt one.
        return openerElement.is('img') ? openerElement : openerElement.find('img');
        }
      }
    });


    // SMOOTH SCROLL
    $(function() {
      $('.custom-navbar a, #home a').on('click', function(event) {
        var $anchor = $(this);
          $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 49
          }, 1000);
            event.preventDefault();
      });
    });  

})(jQuery);



// INSTAFEED
var userFeed = new Instafeed({
  get: 'user',
  userId: 2985480272,
  accessToken: '2985480272.1677ed0.f5b1a8f7cf71469abedabba729d19569',
  resolution: 'standard_resolution',
  useHttp: 'true',
  limit: 4,
  sortBy: 'most-recent',
  template: 
  '<div class="col-md-3 col-sm-3 col-xs-6 instaimg"><a href="{{link}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-responsive center-block"/></a></div>',
  
  target: 'Instafeed',
  after: function() {
    // disable button if no more results to load
    if (!this.hasNext()) {
      btnInstafeedLoad.setAttribute("disabled", "disabled");
    }
  }
});
userFeed.run();

var btnInstafeedLoad = document.getElementById("btn-instafeed-load");
btnInstafeedLoad.addEventListener("click", function() {
  userFeed.next();
});

