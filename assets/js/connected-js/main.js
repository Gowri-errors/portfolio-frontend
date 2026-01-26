/** ===============

 .. Preloader
 .. Menu
 .. Number rotator
 .. Skillbar
 .. Tab
 .. Accordion
 .. Isotope
 .. Prettyphoto
 .. Slick_slider 

 =============== */


jQuery(function($) {

  "use strict";

 scrolling_image_2();
/*------------------------------------------------------------------------------*/
/* Fixed-header
/*------------------------------------------------------------------------------*/

$(window).on("scroll",function(){
    if ( matchMedia( 'only screen and (min-width: 1200px)' ).matches ) 
    {
        if ($(window).scrollTop() >= 50 ) {

            $('.prt-stickable-header').addClass('fixed-header');
        }
        else {

            $('.prt-stickable-header').removeClass('fixed-header');
        }
    }
});



/*------------------------------------------------------------------------------*/
/* Menu
/*------------------------------------------------------------------------------*/


        var menu = {
        initialize: function() {
            this.Menuhover();
        },

        Menuhover : function(){
            var getNav = $("nav.main-menu"),
                getWindow = $(window).width(),
                getHeight = $(window).height(),
                getIn = getNav.find("ul.menu").data("in"),
                getOut = getNav.find("ul.menu").data("out");
            
            if ( matchMedia( 'only screen and (max-width: 1200px)' ).matches ) {
                                                     
                // Enable click event
                $("nav.main-menu ul.menu").each(function(){
                    
                    // Dropdown Fade Toggle
                    $("a.mega-menu-link", this).on('click', function (e) {
                        e.preventDefault();
                        var t = $(this);
                        t.toggleClass('active').next('ul').toggleClass('active');
                    });   

                    // Megamenu style
                    $(".megamenu-fw", this).each(function(){
                        $(".col-menu", this).each(function(){
                            $(".title", this).off("click");
                            $(".title", this).on("click", function(){
                                $(this).closest(".col-menu").find(".content").stop().toggleClass('active');
                                $(this).closest(".col-menu").toggleClass("active");
                                return false;
                                e.preventDefault();
                                
                            });

                        });
                    });  
                    
                }); 
            }
        },
    };

    
    $('.btn-show-menu-mobile').on('click', function(e){
        $(this).toggleClass('is-active'); 
        $('.menu-mobile').toggleClass('show'); 
        return false;
        e.preventDefault();  
    });


    $('ul li:has(ul)').addClass('has-submenu');
    $('ul li ul').addClass('sub-menu');

    $('ul.dropdown li').hover(function () {
        $(this).addClass('hover');

    }, 
    function () {
        $(this).removeClass('hover');
    });

    var $menu = $('#menu'), $menulink = $('#menu-toggle-form'), $menuTrigger = $('.has-submenu > a');
    $menulink.click(function (e) {

        $menulink.toggleClass('active');
        $menu.toggleClass('active');
    });

    $menuTrigger.click(function (e) {
        e.preventDefault();
        var t = $(this);
        t.toggleClass('active').next('ul').toggleClass('active');
    });

    $('ul li:has(ul)');

    // Initialize
    $(document).ready(function(){
        menu.initialize();

    });
 

    var $bannerSlider = jQuery('.banner_slider');
    var $bannerFirstSlide = $('div.slide:first-child');

    $bannerSlider.on('init', function (e, slick) {
      var $firstAnimatingElements = $bannerFirstSlide.find('[data-animation]');
      slideanimate($firstAnimatingElements);
    });
    $bannerSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
      var $animatingElements = $('div.slick-slide[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
      slideanimate($animatingElements);
    });
    $bannerSlider.slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      fade: true,
      dots: false,
      swipe: true,
      adaptiveHeight: true,
      responsive: [

        {
            breakpoint: 1200,
            settings: {
                arrows: false
            }
        },
        {
            breakpoint: 767,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,                
                autoplay: false,
                autoplaySpeed: 4000,
                swipe: true } 
            }] });

    function slideanimate(elements) {
      var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
      elements.each(function () {
        var $this = $(this);
        var $animationDelay = $this.data('delay');
        var $animationType = 'animated ' + $this.data('animation');
        $this.css({
          'animation-delay': $animationDelay,
          '-webkit-animation-delay': $animationDelay });

        $this.addClass($animationType).one(animationEndEvents, function () {
          $this.removeClass($animationType);
        });
      });
    }


/*------------------------------------------------------------------------------*/
/* Animation on scroll: Number rotator
/*------------------------------------------------------------------------------*/
    
    $("[data-appear-animation]").each(function() {
    var self      = $(this);
    var animation = self.data("appear-animation");
    var delay     = (self.data("appear-animation-delay") ? self.data("appear-animation-delay") : 0);
        
        if( $(window).width() > 959 ) {
            self.html('0');
            self.waypoint(function(direction) {
                if( !self.hasClass('completed') ){
                    var from     = self.data('from');
                    var to       = self.data('to');
                    var interval = self.data('interval');
                    self.numinate({
                        format: '%counter%',
                        from: from,
                        to: to,
                        runningInterval: 2000,
                        stepUnit: interval,
                        onComplete: function(elem) {
                            self.addClass('completed');
                        }
                    });
                }
            }, { offset:'85%' });
        } else {
            if( animation == 'animateWidth' ) {
                self.css('width', self.data("width"));
            }
        }
    });
 
/*------------------------------------------------------------------------------*/
/* Skillbar
/*------------------------------------------------------------------------------*/
    
$('.prt-progress-bar').each(function() {
    $(this).find('.progress-bar').width(0);
});

$('.prt-progress-bar').each(function() {

    $(this).find('.progress-bar').animate({
        width: $(this).attr('data-percent')
    }, 2000);
});


// Part of the code responsible for loading percentages:

$('.progress-bar-percent[data-percentage]').each(function () {

    var progress = $(this);
    var percentage = Math.ceil($(this).attr('data-percentage'));

        $({countNum: 0}).animate({countNum: percentage}, {
            duration: 2000,
            easing:'linear',
            step: function() {
            // What todo on every count
                var pct = '';
                if(percentage == 0){
                    pct = Math.floor(this.countNum) + '%';
                }else{
                    pct = Math.floor(this.countNum+1) + '%';
                }
                progress.text(pct);
            }
        });
});


    jQuery(".prt-circle-box").each(function () {

        var circle_box = jQuery(this);
        var fill_val = circle_box.data("fill");
        var emptyFill_val = circle_box.data("emptyfill");
        var thickness_val = circle_box.data("thickness");
        var linecap_val = circle_box.data("linecap")
        var fill_gradient = circle_box.data("gradient");
        var startangle_val = (-Math.PI / 4) * 1.5;
        if (fill_gradient != "") {
            fill_gradient = fill_gradient.split("|");
            fill_val = { gradient: [fill_gradient[0], fill_gradient[1]] };
        }
        if (typeof jQuery.fn.circleProgress == "function") {
            var digit = circle_box.data("digit");
            var before = circle_box.data("before");
            var after = circle_box.data("after");
            var digit = Number(digit);
            var short_digit = digit / 100;
            var size_val = circle_box.data("size");
            jQuery(".prt-circle", circle_box)
                .circleProgress({ value: 0, duration: 8000, size: size_val, startAngle: startangle_val, 
                    thickness: thickness_val, linecap:linecap_val, emptyFill: emptyFill_val, fill: fill_val })
                .on("circle-animation-progress", function (event, progress, stepValue) {
                    
                    circle_box.find(".prt-fid-number").html(before + Math.round(stepValue * 100) + after);
                });
        }
        circle_box.waypoint(
            function (direction) {

                if (!circle_box.hasClass("completed")) {
                    if (typeof jQuery.fn.circleProgress == "function") {
                        jQuery(".prt-circle", circle_box).circleProgress({ value: short_digit });
                    }
                    circle_box.addClass("completed");
                }
            },
            { offset: "90%" }
        );
    });



/*------------------------------------------------------------------------------*/
/* Tab
/*------------------------------------------------------------------------------*/ 

     $(document).ready(function() {

        $('.prt-tabs > .tabs').children('li').on('click', function(e) {  

            var tab = $(this).closest('.prt-tabs > .tabs > .tab'), 

            index = $(this).closest('.prt-tabs > .tabs > li').index();

            $(this).parents('.prt-tabs').children(' .tabs').children('li.active ').removeClass('active'); 

            $(this).addClass('active'); 
            $(this).addClass('active').parents('.prt-tabs').children('.content-tab').find('.content-inner').not('.content-inner:eq(' + index + ')').slideUp();
            $(this).addClass('active').parents('.prt-tabs').children('.content-tab').find('.content-inner:eq(' + index + ')').slideDown();

            e.preventDefault();
        });
    });
$(document).ready(function() {
    // Init Isotope
    var $grid = $('.isotope-project').isotope({
        itemSelector: '.prt-box-col-wrapper',
        layoutMode: 'fitRows'
    });

    // Filter items on tab click
    $('.tabs .tab').on('click', function(e) {
        e.preventDefault();
        
        $('.tabs .tab').removeClass('active');
        $(this).addClass('active');

        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
    });
});


     // team-tab

    $('.prt-tabs-team').each(function() {
    $(this).children('.content-tab').children().hide();
    $(this).children('.content-tab').children().first().show();
    $(this).find('.tabs').children('li').on('click', function(e) {  
        var liActive = $(this).index(),
            contentActive = $(this).siblings().removeClass('active').parents('.prt-tabs-team').children('.content-tab').children().eq(liActive);
        contentActive.addClass('active').fadeIn('slow');
        contentActive.siblings().removeClass('active');
        $(this).addClass('active').parents('.prt-tabs-team').children('.content-tab').children().eq(liActive).siblings().hide();
        e.preventDefault();
    });
});


    $(document).ready(function () {
  // Tabs click function
  $('.prt-tabs .tabs li').on('click', function (e) {
    e.preventDefault();

    let index = $(this).index();

    // Highlight clicked tab
    $(this).addClass('active').siblings().removeClass('active');

    // Show matching content and hide others
    $('.prt-tabs .content-tab .content-inner')
      .hide()
      .eq(index).fadeIn();
  });

  // Accordion toggle
  $('.toggle-title h2').on('click', function () {
    let $content = $(this).closest('.toggle-title').next('.toggle-content');

    // Close others, toggle current
    $('.toggle-content').not($content).slideUp();
    $content.stop(true, true).slideToggle();
  });
});

 document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll(".prt-tabs .tab");
    const items = document.querySelectorAll(".isotope-project .prt-box-col-wrapper");

    tabs.forEach(tab => {
      tab.addEventListener("click", function (e) {
        e.preventDefault();

        // Remove active class from all tabs
        tabs.forEach(t => t.classList.remove("active"));
        this.classList.add("active");

        const filter = this.getAttribute("data-filter");

        items.forEach(item => {
          // Show all if filter is "*"
          if (filter === "*" || item.classList.contains(filter.substring(1))) {
            item.style.display = "block";
          } else {
            item.style.display = "none";
          }
        });
      });
    });
  });


$(document).ready(function() {
    $('.prt-tabs.slider-tab > .tabs').children('li').on('click', function(e) {  
        var tab = $(this).closest('.prt-tabs > .tabs > .tab'), 
        index = $(this).closest('.prt-tabs > .tabs > li').index();
        $(this).parents('.prt-tabs').children(' .tabs').children('li.active ').removeClass('active'); 
        $(this).addClass('active'); 
        $(this).addClass('active').parents('.prt-tabs').children('.content-tab').find('.content-inner').not('.content-inner:eq(' + index + ')').slideUp();
        $(this).addClass('active').parents('.prt-tabs').children('.content-tab').find('.content-inner:eq(' + index + ')').slideDown();
        e.preventDefault();
    });
});

/*------------------------------------------------------------------------------*/
/* Accordion
/*------------------------------------------------------------------------------*/

     var allPanels = $('.accordion > .toggle').children('.toggle-content').hide();

    $('.toggle-title').on('click',function(e) {

        e.preventDefault();
        var $this = $(this);
            $this.parent().parent().find('.toggle .toggle-title a').removeClass('active');

        if ($this.next().hasClass('show')) {

            $this.next().removeClass('show');   
            $this.next().slideUp('easeInExpo');

        } else {
            $this.parent().parent().find('.toggle .toggle-content').removeClass('show');
            $this.parent().parent().find('.toggle .toggle-content').slideUp('easeInExpo');
            $this.next().toggleClass('show');
            $this.next().removeClass('show');
            $this.next().slideToggle('easeInExpo');
           $this.next().parent().children().children().addClass('active');

        }

    });

$(document).ready(function() {

    // Tab click
    $('.tabs .tab').click(function(e) {
        e.preventDefault();

        var filter = $(this).data('filter');

        // Update tab active state
        $('.tabs .tab').removeClass('active');
        $(this).addClass('active');

        // Show the selected content tab
        $('.content-tab').hide();
        $(filter).show();

        // Close all toggles in all content
        $('.toggle .toggle-content').hide();
        $('.toggle').removeClass('open');

        // Open only the first toggle in the current tab
        var firstToggle = $(filter).find('.toggle').first();
        firstToggle.addClass('open');
        firstToggle.find('.toggle-content').show();
    });

    // Toggle click
    $(document).on('click', '.toggle .toggle-title a', function(e) {
        e.preventDefault();

        var parent = $(this).closest('.toggle');
        var accordion = $(this).closest('.accordion');

        // If already open, close it
        if (parent.hasClass('open')) {
            parent.removeClass('open');
            parent.find('.toggle-content').slideUp();
        } else {
            // Close all other toggles in the same accordion
            accordion.find('.toggle').removeClass('open');
            accordion.find('.toggle-content').slideUp();

            // Open clicked one
            parent.addClass('open');
            parent.find('.toggle-content').slideDown();
        }
    });

    // Trigger click on default tab to initialize
    $('.tabs .tab.active').trigger('click');

});


/*------------------------------------------------------------------------------*/
/* Tab
/*------------------------------------------------------------------------------*/ 

    $('.prt-tabs > .tabs').children('li').on('click', function(e) {  

        var tab = $(this).closest('.prt-tabs > .tabs > .tab'), 

        index = $(this).closest('.prt-tabs > .tabs > li').index();

        $(this).parents('.prt-tabs').children('.tabs').children('li.active ').removeClass('active'); 

        $(this).addClass('active'); 
        $(this).addClass('active').parents('.prt-tabs').children('.content-tab').find('.content-inner').not('.content-inner:eq(' + index + ')').slideUp();
        $(this).addClass('active').parents('.prt-tabs').children('.content-tab').find('.content-inner:eq(' + index + ')').slideDown();

        e.preventDefault();
    });




/*------------------------------------------------------------------------------*/
/* Isotope
/*------------------------------------------------------------------------------*/

   
$(function () {

    if ( $().isotope ) {           
        var $container = $('.isotope-project');
        $container.imagesLoaded(function(){
            $container.isotope({
                itemSelector: '',
                transitionDuration: '1s',
            });
        });

        $('.portfolio-filter li').on('click',function() {                           
            var selector = $(this).find("a").attr('data-filter');
            $('.portfolio-filter li').removeClass('active');
            $(this).addClass('active');
            $container.isotope({ filter: selector });
            return false;
        });
    };

});

    
/*------------------------------------------------------------------------------*/
/* Prettyphoto
/*------------------------------------------------------------------------------*/
    $(function () {

        // Normal link
        jQuery('a[href*=".jpg"], a[href*=".jpeg"], a[href*=".png"], a[href*=".gif"]').each(function(){
            if( jQuery(this).attr('target')!='_blank' && !jQuery(this).hasClass('prettyphoto') ){
                var attr = $(this).attr('rel');
                if (typeof attr !== typeof undefined && attr !== false && attr!='prettyPhoto' ) {
                    jQuery(this).attr('data-rel','prettyPhoto');
                }
            }
        });    
        jQuery('a[data-rel^="prettyPhoto"]').prettyPhoto();
    });
    

    $(window).on('load', function(){

    function gridMasonry(){
        var grid = $(".masonry-grid")
        if( grid.length ){
            
          grid.isotope({
            itemSelector: '.masonry-grid-item',
            percentPosition: true,
            layoutMode: 'masonry',
            masonry: {
              columnWidth: '.grid-sizer',
            },
          });
            
        }
    }
    gridMasonry();
});

//        $(document).ready(function() {
//     var e = '<div class="prt_floting_customsett">'+
//                 '<a href="https://support.preyantechnosys.com/" class="tmtheme_fbar_icons"><i class="fa fa-headphones"></i><span>Support</span></a>'+
//                 '<a href="https://preyantechnosys.com/" class="tmtheme_fbar_icons"><i class="themifyicon themifyicon ti-pencil"></i><span>Customization</span></a>'+
//                 '<a href="https://1.envato.market/xkAyd1" class="tmtheme_fbar_icons"><i class="themifyicon ti-shopping-cart"></i><span class="buy_link">Buy<span></span></span></a>'+
//                 '<div class="clearfix"></div>'+
//             '</div>';

//     $('body').append(e);
// }); 
       

/*------------------------------------------------------------------------------*/
/* Slick_slider
/*------------------------------------------------------------------------------*/
    $(".slick_slider").slick({
        speed: 1000,
        infinite: true,
        arrows: false,
        dots: false,                   
        autoplay: false,
        centerMode : false,

        responsive: [{

            breakpoint: 1360,
            settings: {
            slidesToShow: 3,
            slidesToScroll: 3
            }
        },
        {
            breakpoint: 1024,
            settings: {
            slidesToShow: 3,
            slidesToScroll: 3
            }
        },
        {
            breakpoint: 680,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }

        },
        {
            breakpoint: 481,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }

        }
    ]

    });




// slick_slider_center

$('.slick_slider_center').slick({
    centerMode: true,
    arrows: true,
    autoplay: true,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1870,
        settings: {
          arrows: false,
          autoplay: true,
          centerMode: true,
          slidesToShow: 3
        }
      },
      {
        breakpoint: 992,
        settings: {
          arrows: false,
          autoplay: true,
          centerMode: true,
          slidesToShow: 2
        }
      },
      {
        breakpoint: 575,
        settings: {
          arrows: false,
          autoplay: true,
          centerMode: true,
          slidesToShow: 1
        }
      }
    ]
  });
 function animateHeroText(context) {
    console.log("Animating slide:", context);
    const rotateEls = context.querySelectorAll('.animaction-1');
    rotateEls.forEach((el, i) => {
      el.classList.remove('animate-rotateDown');
      void el.offsetWidth; // force reflow to restart animation
      setTimeout(() => el.classList.add('animate-rotateDown'), i * 150);
    });

    const fadeUp = context.querySelector('.animaction-2');
    if (fadeUp) {
      fadeUp.classList.remove('animate-fadeUp');
      void fadeUp.offsetWidth;
      setTimeout(() => fadeUp.classList.add('animate-fadeUp'), 450);
    }

    const fadeDown = context.querySelector('.animaction-3');
    if (fadeDown) {
      fadeDown.classList.remove('animate-fadeDown');
      void fadeDown.offsetWidth;
      setTimeout(() => fadeDown.classList.add('animate-fadeDown'), 650);
    }
  }

  $(function() {
    const $slider = $('.hero-banner');

    $slider.on('init', function(event, slick) {
      console.log('Slick initialized');
      animateHeroText(slick.$slides[0]);
    });

    $slider.on('afterChange', function(event, slick, currentSlide) {
      console.log('Slide changed to:', currentSlide);
      animateHeroText(slick.$slides[currentSlide]);
    });

    $slider.slick({
      slidesToShow: 1,
      arrows: true,
      autoplay: true,
      autoplaySpeed: 5000,
      infinite: true,
      speed: 600,
    });
  });
  function animateHeroText(context) {
  if (!context) return;

  const rotateEls = context.querySelectorAll('.animaction-1');
  rotateEls.forEach((el, i) => {
    el.classList.remove('animate-rotateDown');
    void el.offsetWidth;
    setTimeout(() => el.classList.add('animate-rotateDown'), i * 150);
  });

  const fadeUp = context.querySelector('.animaction-2');
  if (fadeUp) {
    fadeUp.classList.remove('animate-fadeUp');
    void fadeUp.offsetWidth;
    setTimeout(() => fadeUp.classList.add('animate-fadeUp'), 450);
  }

  const fadeDown = context.querySelector('.animaction-3');
  if (fadeDown) {
    fadeDown.classList.remove('animate-fadeDown');
    void fadeDown.offsetWidth;
    setTimeout(() => fadeDown.classList.add('animate-fadeDown'), 650);
  }
}







  var testinav = jQuery('.testimonial-nav', this);
    var testiinfo = jQuery('.testimonial-info', this);


    
    jQuery('.testimonial-nav', this).slick({

        slidesToShow: 7,
        slidesToScroll: 1,
        asNavFor: '.testimonial-info',
        dots: false,
        infinite: true,
        speed: 300,
        centerMode: true,
        arrows: false,
        vertical: true,
        verticalScrolling: false,
        verticalSwiping: false,
        focusOnSelect: true,

        responsive: [{
            breakpoint: 1199,
            settings: {
                arrows: false,
                dots: false,
                centerMode: true,
                centerPadding: '0',
                slidesToShow: 1
            }
        }, {
            breakpoint: 480,
            settings: {
               arrows: false,
                dots: false,
                centerMode: true,
                centerPadding: '0',
                slidesToShow: 1
            }
        }]

    });


    jQuery('.testimonial-info', this).slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: false,
        arrows: false,
        dots: false,
        // asNavFor: '.testimonial-nav',
        adaptiveHeight: true,
        speed: 1500,
        autoplay: false,
        loop: true,
        infinite: true,
        vertical: true,
        verticalScrolling: true,
        verticalSwiping: true,
        arrows:false,
        touchMove:true,
        swipeToSlide:true,
        swipe:true,

        responsive: [{
            breakpoint: 992,
            settings: {
                arrows: false,
                centerMode: true,
                autoplay: false,
                centerPadding: '0',
                slidesToShow: 1
            }
        }, {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                autoplay: false,
                centerPadding: '0',
                slidesToShow: 1
            }
        }]
    });

});


/*------------------------------------------------------------------------------*/
/* image-iffect
/*------------------------------------------------------------------------------*/
gsap.registerPlugin(ScrollTrigger, SplitText);

function tm_reveal_img_animation() {
    const boxes = gsap.utils.toArray('.tm-reveal-effects-yes');
    boxes.forEach(img => {
        gsap.to(img, {
            scrollTrigger: {
                trigger: img,
                start: "top 70%",
                end: "bottom bottom",
                toggleClass: "active",
                once: true,
            }
        });
    });
}   

jQuery(window).on('load', function(){
    tm_reveal_img_animation(); 
    gsap.delayedCall(1, () =>
        ScrollTrigger.getAll().forEach((t) => {
            t.refresh();
        })
    );
});



/*------------------------------------------------------------------------------*/
/* Contact Form
/*------------------------------------------------------------------------------*/
$(function() {
    //Contact Form Validation
    if($('#contactform').length){
        $('#submit').on('click', function(){
            var o = new Object();
            var form = '#contactform';
            
            var username = $('#contactform .username').val();
            var email = $('#contactform .email').val();
            var message = $('#contactform .message').val();
            
            if(username == '' || email == '' || message == '')
            {
                $('#contactform .response').html('<div class="failed">Please fill the required fields.</div>');
                return false;
            }
            
            $.ajax({
                url:"php/sendemail.php",
                method:"POST",
                data: $(form).serialize(),
                beforeSend:function(){
                    $('#contactform .response').html('<div class="text-info">Loading...</div>');
                },
                success:function(data){
                    $('form').trigger("reset");
                    $('#contactform .response').fadeIn().html(data);
                    setTimeout(function(){
                        $('#contactform .response').fadeOut("slow");
                    }, 5000);
                },
                error:function(){
                    $('#contactform .response').fadeIn().html(data);
                }
            });
        });
    }

    });


 /*---------------------------------------------------------------------
      Wow init
    ----------------------------------------------------------------------*/
    if (typeof WOW == "function")
        new WOW().init();

/*---Scrollimg---*/
function scrolling_image_2() {
    "use strict";
        if (!jQuery(".tm-scrollablebox-box")[0]) {
           return
        }

        ScrollTrigger.matchMedia({
        "(min-width: 991px)": function() {
            let container = jQuery(".tm-scrollablebox-box .tm-img-left");
            let section = jQuery(".tm-scrollablebox-box .scrollablebox-wrapper");
            var indicators = gsap.utils.toArray('.tm-scrollablebox-box .scroll-changing-stepbox-item-image');
            var points = gsap.utils.toArray('.tm-scrollablebox-box .tm-stepsboxslider-contentbox');
    
            var gap = points.length * 90;

            let tl = gsap.timeline({
                scrollTrigger: {
                    pin: true,
                    scrub: 1,
                     start: "top 17%", 
                    trigger: container,
                    end: () => "+=" + ((section.height() + gap) - document.documentElement.clientHeight),
                    onUpdate: (self) => {
                        let per = parseInt(self.progress * 100 , 10);
                        if (per > 99) indicators[points.length - 1].classList.add('last');
                        else indicators[points.length - 1].classList.remove('last');
                        if (per < 1) indicators[0].classList.add('first');
                        else indicators[0].classList.remove('first');
                    }
                },
                defaults: { ease: "none", duration: 1 }
            });

            points.forEach((sct, i) => {
                let pos = indicators[i];
                ScrollTrigger.create({
                    trigger: sct,
                    start: "top center",
                    end: () => '+=' + sct.offsetHeight,
                    toggleClass: { targets: pos, className: "active" }
                });
            });

            },
            "(max-width:991px)": function() {
                ScrollTrigger.getAll().forEach(pin => pin.kill(true));
            }
        });
    }
    
jQuery('.preyantechnosys-boxes-view-swiper .preyantechnosys-boxes-inner').addClass('swiper');
jQuery('.preyantechnosys-boxes-view-swiper .preyantechnosys-boxes-row-wrapper').addClass('swiper-wrapper');
jQuery('.preyantechnosys-boxes-view-swiper .preyantechnosys-boxes-row-wrapper > .prt-box-col-wrapper').addClass('swiper-slide');


initSwiper();
function initSwiper() {
    "use strict";
    jQuery('.preyantechnosys-boxes-view-swiper').each(function(){
         
        // Speed
        var tm_speed = 4500;
        if( jQuery.trim( jQuery(this).data('prt-speed') ) != '' ){
            tm_speed = jQuery.trim( jQuery(this).data('prt-speed') );
        }

        // Autoplay
        var tm_autoplay = false;
        if( jQuery(this).data('prt-autoplay')=='1' ){
            tm_autoplay = true;
        }

        // AutoSpeed
        var tm_autospeed = 4500;
        if( jQuery.trim( jQuery(this).data('prt-autospeed') ) != '' ){
            tm_autospeed = jQuery.trim( jQuery(this).data('prt-autospeed') );
        }
        
        // Loop
        var tm_loop = false;
        if( jQuery.trim( jQuery(this).data('prt-loop') ) == '1' ){
            tm_loop = true;
        }
        
        // Free Mode
        var tm_freemode = false;
        if( jQuery.trim( jQuery(this).data('prt-freemode') ) == '1' ){
            tm_freemode = true;
        }
        
        // Mousewheel
        var tm_mousewheel = false;
        if( jQuery.trim( jQuery(this).data('prt-mousewheel') ) == '1' ){
            tm_mousewheel = true;
        }


        // Center mode
        var tm_centermode = false;
        if( jQuery.trim( jQuery(this).data('prt-centermode') ) == '1' ){
            tm_centermode = true;
        }

        // slidesPerView
        var tm_slidesperview = 1;
        if( jQuery.trim( jQuery(this).data('prt-slidesperview') ) != '' ){
            tm_slidesperview = jQuery.trim( jQuery(this).data('prt-slidesperview') );
        }

        // Swiper Type
        var tm_swipertype = 'none';
        if( jQuery.trim( jQuery(this).data('prt-swipertype') ) != '' ){
            tm_swipertype = jQuery.trim( jQuery(this).data('prt-swipertype') );
        }
        
        // Column Space
        var tm_spacebetween = 100;
        if( jQuery.trim( jQuery(this).data('prt-spacebetween') ) != '' ){
            var tm_spacebetween = jQuery.trim( jQuery(this).data('prt-spacebetween') );
        }
        

    var swiper = new Swiper(".preyantechnosys-boxes-view-swiper .preyantechnosys-boxes-inner", {
        
         effect: tm_swipertype,
         centeredSlides: tm_centermode,
         loop: tm_loop,
         autoplay: tm_autoplay,
         autoplaySpeed: tm_autospeed,
         speed: 2500,
         spaceBetween: 130,
         freeMode: tm_freemode,
         mousewheel: {
            enabled: tm_mousewheel,
         },
         navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
         },
         slidesPerView: tm_slidesperview,
         coverflowEffect: {
            rotate: 0,
            stretch: 200,
            depth: 200,
            modifier: 1,
            slideShadows: false
         },
         breakpoints: {
            320: {
                    slidesPerView: 1,
                    spaceBetween: 30,
                    coverflowEffect: {
                        rotate: 0,
                        stretch: 0,
                        depth: 0,
                        modifier: 5,
                        slideShadows: false
                    },
            },
            768: {
                    slidesPerView: 2,
                    coverflowEffect: {
                        rotate: 0,
                        stretch: 100,
                        depth: 200,
                        modifier: 1,
                        slideShadows: false
                    },
                    
            },
            1300: {
                slidesPerView: 3,
                coverflowEffect: {
                    rotate: 0,
                    stretch: 200,
                    depth: 200,
                    modifier: 1,
                    slideShadows: false
                },
            },
        }
    });
});
}
  
    

/*------------------------------------------------------------------------------*/
/* reveal img animation
/*------------------------------------------------------------------------------*/
function tm_reveal_img_animation() {
    "use strict";
    const boxes = gsap.utils.toArray('.tm-reveal-effects-yes');
    boxes.forEach(img => {
        gsap.to(img, {
            scrollTrigger: {
                trigger: img,
                start: "top 70%",
                end: "bottom bottom",
                toggleClass: "active",
                once: true,
            }
        });
    });
}   

/*---Scrollimg---*/
function scrolling_image_2() {
    "use strict";
        if (!jQuery(".tm-scrollablebox-box")[0]) {
           return
        }

        ScrollTrigger.matchMedia({
        "(min-width: 991px)": function() {
            let container = jQuery(".tm-scrollablebox-box .tm-img-left");
            let section = jQuery(".tm-scrollablebox-box .scrollablebox-wrapper");
            var indicators = gsap.utils.toArray('.tm-scrollablebox-box .scroll-changing-stepbox-item-image');
            var points = gsap.utils.toArray('.tm-scrollablebox-box .tm-stepsboxslider-contentbox');
    
            var gap = points.length * 90;

            let tl = gsap.timeline({
                scrollTrigger: {
                    pin: true,
                    scrub: 1,
                     start: "top 17%", 
                    trigger: container,
                    end: () => "+=" + ((section.height() + gap) - document.documentElement.clientHeight),
                    onUpdate: (self) => {
                        let per = parseInt(self.progress * 100 , 10);
                        if (per > 99) indicators[points.length - 1].classList.add('last');
                        else indicators[points.length - 1].classList.remove('last');
                        if (per < 1) indicators[0].classList.add('first');
                        else indicators[0].classList.remove('first');
                    }
                },
                defaults: { ease: "none", duration: 1 }
            });

            points.forEach((sct, i) => {
                let pos = indicators[i];
                ScrollTrigger.create({
                    trigger: sct,
                    start: "top center",
                    end: () => '+=' + sct.offsetHeight,
                    toggleClass: { targets: pos, className: "active" }
                });
            });

            },
            "(max-width:991px)": function() {
                ScrollTrigger.getAll().forEach(pin => pin.kill(true));
            }
        });
    }  
    





// Example assuming you're using Isotope
var $grid = $('.isotope-project').isotope({
  itemSelector: '.plan',
  layoutMode: 'fitRows' // or 'masonry'
});

document.querySelectorAll('.prt-tabs .tab').forEach(tab => {
    tab.addEventListener('click', function (e) {
        e.preventDefault();
        const filter = this.getAttribute('data-filter');

        // Filter isotope
        $grid.isotope({ filter: '.' + filter });

        // Update active tab
        document.querySelectorAll('.prt-tabs .tab').forEach(t => t.classList.remove('active'));
        this.classList.add('active');
    });
});
document.querySelectorAll('.tabs .tab').forEach(tab => {
  tab.addEventListener('click', (e) => {
    e.preventDefault();

    // Remove active from all tabs, add to clicked tab
    document.querySelectorAll('.tabs .tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    const period = tab.dataset.period; // "monthly" or "yearly"

    // Data for prices and features for monthly and yearly
    const pricingData = {
  monthly: {
    price: "$49.00",
    frequency: "Monthly",
    features: [
      "<span>Basic</span> data backup solutions",
      "<span>Monthly</span> performance reports",
      "<span>Basic</span> website design & development",
      "<span>Email</span> and cloud support",
      "<span>24/7</span> system monitoring"
    ]
  },
  monthly: {
    price: "$49.00",
    frequency: "Monthly",
    features: [
      "<span>Basic</span> data backup solutions",
      "<span>Monthly</span> performance reports",
      "<span>Basic</span> website design & development",
      "<span>Email</span> and cloud support",
      "<span>24/7</span> system monitoring"
    ]
  },
  yearly: {
    price: "$499.00",
    frequency: "Yearly",
    features: [
      "<span>Basic</span> data backup solutions",
      "<span>Quarterly</span> performance reports",
      "<span>Basic</span> website design & development",
      "<span>Email</span> and cloud support",
      "<span>24/7</span> system monitoring"
    ]
  }
};


    // For simplicity, update only Basic plan here, extend as needed
    const basicPlan = document.querySelector('.plan');

    // Animate fade out
    basicPlan.style.opacity = 0;

    setTimeout(() => {
      basicPlan.querySelector('.plan-price').textContent = data[period].Basic.price;
      basicPlan.querySelector('.plan-frequency').textContent = data[period].Basic.frequency;
      const ul = basicPlan.querySelector('.plan-features');
      ul.innerHTML = ''; // clear current features
      data[period].Basic.features.forEach(feature => {
        const li = document.createElement('li');
        li.textContent = feature;
        ul.appendChild(li);
      });

      // Fade in
      basicPlan.style.opacity = 1;
    }, 300); // match animation duration
  });
});
document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll(".prt-tabs .tab");
    const items = document.querySelectorAll(".isotope-project .prt-box-col-wrapper");

    tabs.forEach(tab => {
      tab.addEventListener("click", function (e) {
        e.preventDefault();

        // Remove active class from all tabs
        tabs.forEach(t => t.classList.remove("active"));
        this.classList.add("active");

        const filter = this.getAttribute("data-filter");

        items.forEach(item => {
          // Show all if filter is "*"
          if (filter === "*" || item.classList.contains(filter.substring(1))) {
            item.style.display = "block";
          } else {
            item.style.display = "none";
          }
        });
      });
    });
  });



     $(document).ready(function() {

        $('.prt-tabs > .tabs').children('li').on('click', function(e) {  

            var tab = $(this).closest('.prt-tabs > .tabs > .tab'), 

            index = $(this).closest('.prt-tabs > .tabs > li').index();

            $(this).parents('.prt-tabs').children(' .tabs').children('li.active ').removeClass('active'); 

            $(this).addClass('active'); 
            $(this).addClass('active').parents('.prt-tabs').children('.content-tab').find('.content-inner').not('.content-inner:eq(' + index + ')').slideUp();
            $(this).addClass('active').parents('.prt-tabs').children('.content-tab').find('.content-inner:eq(' + index + ')').slideDown();

            e.preventDefault();
        });
    });
$(document).ready(function() {
    // Init Isotope
    var $grid = $('.isotope-project').isotope({
        itemSelector: '.prt-box-col-wrapper',
        layoutMode: 'fitRows'
    });

    // Filter items on tab click
    $('.tabs .tab').on('click', function(e) {
        e.preventDefault();
        
        $('.tabs .tab').removeClass('active');
        $(this).addClass('active');

        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
    });
});




 $('.prt-tabs-team').each(function() {
    $(this).children('.content-tab').children().hide();
    $(this).children('.content-tab').children().first().show();
    $(this).find('.tabs').children('li').on('click', function(e) {  
        var liActive = $(this).index(),
            contentActive = $(this).siblings().removeClass('active').parents('.prt-tabs-team').children('.content-tab').children().eq(liActive);
        contentActive.addClass('active').fadeIn('slow');
        contentActive.siblings().removeClass('active');
        $(this).addClass('active').parents('.prt-tabs-team').children('.content-tab').children().eq(liActive).siblings().hide();
        e.preventDefault();
    });
});

 
 jQuery(".tm-animate-title").each(function () {
         var index = 0;
        var words = jQuery(this).text().split(" ");
        var total = words.length;
        jQuery(this).empty();
        for (index = 0; index < total; index++) {
            jQuery(this).append(jQuery("<span /> ").text(words[index] + " "));
        }
    });


    var TextOpacity = gsap.utils.toArray(".tm-animate-title");
    TextOpacity.forEach(function (TextOpacity) {
        var spanOpacity = TextOpacity.querySelectorAll("span");
        gsap.to(spanOpacity, {
            scrollTrigger: {
                trigger: TextOpacity,
                start: "top 85%",
                end: () => `+=${TextOpacity.offsetHeight}`,
                scrub: 1
            },
            duration: 1,
            opacity: 1,
            stagger: 0.5,
            ease: Linear.easeNone
        });
    });
      gsap.registerPlugin(ScrollTrigger, SplitText);
gsap.config({
    nullTargetWarn: false,
    trialWarn: false
});
document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector('.scroll-container');
  const target = document.querySelector('.scroll-animated-box');

  if (!container || !target) return;

  function handleScroll() {
    const rect = container.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    const visible = rect.top < windowHeight && rect.bottom > 0;
    if (visible) {
      const centerDistance = Math.abs((rect.top + rect.height / 2) - (windowHeight / 2));
      const maxDistance = windowHeight / 2;

      const progress = 1 - Math.min(centerDistance / maxDistance, 1); // 0 to 1

      const scale = 0.80 + (0.20 * progress); // from 0.8 to 1
      const radius = 30 - (30 * progress);   // from 30px to 0px

      target.style.transform = `translateY(-50%) scaleX(${scale})`;
      target.style.borderRadius = `${radius}px`;
    }
  }

  window.addEventListener('scroll', handleScroll);
  handleScroll();
});


document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.getElementById('billingToggle');

  if (toggle) {
    toggle.addEventListener('change', () => {
      const priceBoxes = document.querySelectorAll('.prt-ptablebox-price');

      priceBoxes.forEach(box => {
        const priceValue = box.querySelector('.prt-ptablebox-price-value');
        const frequencyText = box.parentElement.querySelector('.pac_frequency');
        const monthly = box.getAttribute('data-monthly');
        const yearly = box.getAttribute('data-yearly');

        if (toggle.checked) {
          priceValue.textContent = yearly;
          frequencyText.textContent = 'Yearly';
        } else {
          priceValue.textContent = monthly;
          frequencyText.textContent = 'Monthly';
        }
      });
    });
  } else {
    console.warn("Element with ID 'billingToggle' not found in the DOM.");
  }
});



/*------------------------------------------------------------------------------*/
/* Back to top
/*------------------------------------------------------------------------------*/
    
    // ===== Scroll to Top ==== 
   jQuery(document).ready(function ($) {
    const $totop = $('#totop');

    if ($totop.length) {
        $totop.hide();

        $(window).on('scroll', function () {
            if ($(this).scrollTop() >= 500) {
                $totop.fadeIn(200).addClass('top-visible');
            } else {
                $totop.fadeOut(200).removeClass('top-visible');
            }
        });

        $totop.on('click', function () {
            $('html, body').animate({ scrollTop: 0 }, 500);
            return false;
        });
    } else {
        console.warn(' Element #totop not found in the DOM.');
    }
});
 

// hero-banner
$(document).ready(function () {
  new WOW().init();

  const $slider = $('.hero-banner');

  if ($slider.length > 0) {
    $slider.slick({
      autoplay: true,
      autoplaySpeed: 6000,
      fade: true,
      arrows: true,
      dots: false,
      pauseOnHover: false,
    });

    // Re-trigger WOW animations on each slide
    $slider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
      const $nextSlide = $(slick.$slides[nextSlide]);
      $nextSlide.find('.wow').each(function () {
        const $el = $(this);
        const animationClass = $el.attr('class').match(/animate__\S+/);
        if (animationClass) {
          $el.removeClass('animate__animated ' + animationClass[0]);
          void $el[0].offsetWidth; // trigger reflow
          $el.addClass('animate__animated ' + animationClass[0]);
        }
      });
    });
  } else {
    console.warn("'.hero-banner' element not found. Slick was not initialized.");
  }
});


// hero-banner-2
$(document).ready(function () {
    new WOW().init();

    const $slider = $('.hero-banner-2');

    $slider.slick({
      autoplay: true,
      autoplaySpeed: 6000,
      fade: true,
      arrows: true,
      dots: false  ,
      pauseOnHover: false,
    });

    // Re-trigger WOW animations on each slide
    $slider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
      const $nextSlide = $(slick.$slides[nextSlide]);
      $nextSlide.find('.wow').each(function () {
        const $el = $(this);
        const animationClass = $el.attr('class').match(/animate__\S+/);
        if (animationClass) {
          $el.removeClass('animate__animated ' + animationClass[0]);
          void $el[0].offsetWidth; // trigger reflow
          $el.addClass('animate__animated ' + animationClass[0]);
        }
      });
    });
  });



    const words = ["Code", "Software", "Platform"];
    const textElement = document.getElementById('text');

    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    const typeSpeed = 100;
    const deleteSpeed = 50;
    const pauseBeforeDelete = 2000;
    const pauseBeforeNextWord = 500;

    function type() {
      const currentWord = words[wordIndex];

      if (isDeleting) {
        charIndex--;
      } else {
        charIndex++;
      }

      textElement.textContent = currentWord.substring(0, charIndex);

      let speed = isDeleting ? deleteSpeed : typeSpeed;

      if (!isDeleting && charIndex === currentWord.length) {
        speed = pauseBeforeDelete;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        speed = pauseBeforeNextWord;
      }

      setTimeout(type, speed);
    }

    if (textElement) {
      type();
    }
// Tabs logic


// Accordion toggles
document.querySelectorAll('.toggle-title').forEach(title => {
  title.addEventListener('click', function () {
    const toggle = title.parentElement;
    toggle.classList.toggle('open');
  });
});

const popup = document.getElementById('quotation--popup');
const overlay = document.querySelector('.quotation--popup-overly');
const openBtn = document.getElementById('openQuotation');
const closeBtn = document.getElementById('closePopup');
const form = document.getElementById('quotationForm');

// Show popup
if (openBtn && popup && overlay) {
  openBtn.addEventListener('click', () => {
    popup.style.display = 'block';
    overlay.style.display = 'block';
    document.body.style.overflow = 'hidden';
  });
}

// Close popup function (used below)
function closePopup() {
  if (popup && overlay) {
    popup.style.display = 'none';
    overlay.style.display = 'none';
    document.body.style.overflow = '';
  }
}

// Close popup event listeners
if (closeBtn) {
  closeBtn.addEventListener('click', closePopup);
}
if (overlay) {
  overlay.addEventListener('click', closePopup);
}

// Multi-step form logic
if (form) {
  const steps = [...form.querySelectorAll('.form-step')];
  let currentStep = 0;

  function showStep(index) {
    steps.forEach((step, i) => {
      step.classList.toggle('active', i === index);
    });
  }

  showStep(currentStep); // show initial step

  // Next buttons
  form.querySelectorAll('.next-btn').forEach(button => {
    button.addEventListener('click', () => {
      const inputs = steps[currentStep].querySelectorAll('input');
      let valid = true;
      inputs.forEach(input => {
        if (!input.checkValidity()) {
          input.reportValidity();
          valid = false;
        }
      });
      if (!valid) return;

      currentStep++;
      if (currentStep >= steps.length) currentStep = steps.length - 1;
      showStep(currentStep);
    });
  });

  // Previous buttons
  form.querySelectorAll('.prev-btn').forEach(button => {
    button.addEventListener('click', () => {
      currentStep--;
      if (currentStep < 0) currentStep = 0;
      showStep(currentStep);
    });
  });

  
}

// On page load, show all content and set 'All' tab active
document.addEventListener('DOMContentLoaded', () => {
  // Set 'All' tab active
  const allTab = document.querySelector('.tab[data-filter="all"]');
  if (allTab) allTab.classList.add('active');

  // Show all tab-content
  document.querySelectorAll('.tab-content').forEach(c => c.classList.add('active'));
});


document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tabs .tab");
  const cards = document.querySelectorAll(".team-card");

  tabs.forEach(tab => {
    tab.addEventListener("click", e => {
      e.preventDefault(); // Fix here — you were missing the method name

      const filter = tab.getAttribute("data-filter");

      // Update active tab
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");

      if (filter === "all" || filter === "*") {
        // Show all cards
        cards.forEach(card => {
          card.style.display = "";
        });
      } else {
        cards.forEach(card => {
          if (card.classList.contains(filter)) {
            card.style.display = "";
          } else {
            card.style.display = "none";
          }
        });
      }
    });
  });

  // Show all cards on initial load by triggering 'All' tab
  const allTab = document.querySelector('.tab[data-filter="all"], .tab[data-filter="*"]');
  if (allTab) allTab.click();
});

  // Tab switching
  document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', function(e) {
      e.preventDefault();

      // Remove active class from all tabs
      document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));

      // Hide all tab contents
      document.querySelectorAll('.content-tab, .tab-conatin-inner').forEach(content => {
        content.style.display = 'none';
        content.classList.remove('active');
      });

      // Activate current tab
      this.classList.add('active');

      const filterClass = this.getAttribute('data-filter');
      const contentToShow = document.querySelector(filterClass);
      if (contentToShow) {
        contentToShow.style.display = 'block';
        contentToShow.classList.add('active');
      }
    });
  });


  document.addEventListener("DOMContentLoaded", function () {
    const toggles = document.querySelectorAll(".toggle");

    toggles.forEach((toggle) => {
      const title = toggle.querySelector(".toggle-title");

      title.addEventListener("click", function (e) {
        e.preventDefault();

        // If toggle is already open, close it
        if (toggle.classList.contains("open")) {
          toggle.classList.remove("open");
          toggle.querySelector(".toggle-content").style.display = "none";
        } else {
          // Close all toggles
          toggles.forEach((otherToggle) => {
            otherToggle.classList.remove("open");
            otherToggle.querySelector(".toggle-content").style.display = "none";
          });

          // Open clicked toggle
          toggle.classList.add("open");
          toggle.querySelector(".toggle-content").style.display = "block";
        }
      });
    });
  });
