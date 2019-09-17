(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        
        $('[data-toggle="tooltip"]').tooltip();


        $(".homepage-sliders").owlCarousel({
            items:1,
            loop:true,
            autoplay:false,
            dots:true,
            nav:true,
            navText:["<i class='fa fa-long-arrow-left'></i>","<i class='fa fa-long-arrow-right'></i>"]
        });


        $(".logo-slider").owlCarousel({
            items:6,
            loop:true,
            autoplay:false,
            dots:false,
            nav:false,
            margin:30
        });
        $(".case-study-slider").owlCarousel({
        	items:3,
            // loop:true,// akpashe side img dekhabe
        	loop:true,// dui pasei side img dekhabe
        	autoplay:true,
        	dots:true,
        	nav:false,
            margin:30
        });
        
        $(".testimonial-slider").owlCarousel({
        	items:1,
        	loop:true,
        	autoplay:false,
        	dots:true,
        	nav:false
        });
        
/*---------------------------
// off canvas menu start
----------------------------------*/

        $(".off-cavas-bars").on('click',function(){
            $(".off-canvas-menu").addClass("off-canvas-active");
            $(".off-canvas-menu-shade").addClass("active");
        });

        $(".close-btn , .off-canvas-menu-shade").on('click',function(){
            $(".off-canvas-menu").removeClass("off-canvas-active");
            $(".off-canvas-menu-shade").removeClass("active");
        });


/*---------------------------
// off canvas menu End
----------------------------------*/




    $(".testimonial-single-item-box").hover(function(){
        $(".testimonial-single-item-box").removeClass('active');
        $(this).addClass("active");
    });









    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	