$(document).ready(function(){
    var state = true;
    $("#show-menu-right").click(function () {
        console.log("da vao");
        if (state) {
            $(".wrap-cd-accordion-menu").animate({
                display: 'block',
                left: 0
            }, 800);
        } else {
            $(".wrap-cd-accordion-menu").animate({
                left: -360,
                display: 'none',
            }, 800);
        }
        state = !state;
    });

    $(".btn-close-accordion-menu").click(function () {
        if (state) {
            $(".wrap-cd-accordion-menu").animate({
                display: 'block',
                left: 0
            }, 800);
        } else {
            $(".wrap-cd-accordion-menu").animate({
                left: -360,
                display: 'none',
            }, 800);
        }
        state = !state;
    });

    //var stateBox = true;
    //$(".show-box-search").click(function () {
    //    console.log('da vao');
    //    if (stateBox) {
    //        $(".wrap-cd-box").animate({
    //            display: 'block',
    //            right: 0
    //        }, 800);
    //    } else {
    //        $(".wrap-cd-box").animate({
    //            right: -360,
    //            display: 'none',
    //        }, 800);
    //    }
    //    stateBox = !stateBox;
    //});

    //$(".btn-close-box").click(function () {
    //    if (stateBox) {
    //        $(".wrap-cd-box").animate({
    //            display: 'block',
    //            right: 0
    //        }, 800);
    //    } else {
    //        $(".wrap-cd-box").animate({
    //            right: -360,
    //            display: 'none',
    //        }, 800);
    //    }
    //    stateBox = !stateBox;
    //});
    $(window).scroll(function () {
        if (parseInt(this.scrollY) > 10) {
            $(".navbar-fixed-top1").addClass('bg-fff');
            $(".logo-aman").addClass("logo-aman-dark");
            $(".logo-es-detail").addClass('logo-es-dark');
            $(".menu-c-detail").addClass('bg-fff');
        } else {
            $(".navbar-fixed-top1").removeClass('bg-fff');
            $(".logo-aman").removeClass('logo-aman-dark');
            $(".logo-es-detail").removeClass('logo-es-dark');
            $(".menu-c-detail").removeClass('bg-fff');
        }
        if ($(window).scrollTop() >= 600) {
            $("#srcoller").addClass("fixed-menu-header");
        } else {
            $("#srcoller").removeClass("fixed-menu-header");
        }
    });

    $('.slider-banner-home').flexslider({
        animation: "slide",
        animationLoop: true,
        nextText: "",
        prevText: "",
        controlNav: true,
        animationSpeed: 600
    });
    
    $('.slider-list').flexslider({
        animation: "slide",
        animationLoop: true,
        nextText: "",
        prevText: "",
        controlNav: false
    });
    $('.slider-banner').flexslider({
        animation: "slide",
        animationLoop: true,
        nextText: "",
        prevText: "",
        controlNav: false
    });
    //tours
    $(".tourlink a[href^='#']").click(function (e) {
        e.preventDefault();
        $(".tourlink a[href^='#']").removeClass("active");
        $(this).addClass("active");
        
        var position = $($(this).attr("href")).offset().top;
      
        $("body, html").animate({
            scrollTop: position
            
        } /* speed */);
       
    });
    
    $(".gallery").owlCarousel({
        loop: false,
        margin: 50,
        responsiveClass: true,
        items: 1, //10 items above 1000px browser width
        dots: false,
        nav: true,
        navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>']
    });
    $(".gallery-room-last").owlCarousel({
        loop: false,
        margin: 50,
        responsiveClass: true,
        items: 1, //10 items above 1000px browser width
        dots: false,
        nav: true,
        navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>']
    });
    
    $(".list-image").owlCarousel({
        loop: false,
        margin: 50,
        responsiveClass: true,
        items: 1, //10 items above 1000px browser width
        dots: false,
        nav: true,
        navText: ['<svg class="icon-primary" width="20px" height="12px" viewBox="0 0 20 12" tabIndex="-1"><g id="Modules" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="Modules-Desktop" transform="translate(-4389.000000, -8060.000000)" fill="#AE9364"><g id="Icons/Arrow/Small/Gold" transform="translate(4399.000000, 8066.000000) scale(-1, 1) translate(-4399.000000, -8066.000000) translate(4389.000000, 8060.000000)"><path d="M0.145633676,6.41626878 L4.14506102,11.4151364 C4.38300712,11.7120691 4.81024367,11.7380632 5.08218206,11.5194461 C5.35412046,11.3004957 5.40510891,10.8539302 5.18649177,10.5819918 L2.05153526,6.66621216 L19.3289547,6.66621216 C19.6975379,6.66621216 19.9954704,6.36794639 19.9954704,5.99969648 C19.9954704,5.63144656 19.6975379,5.33318079 19.3289547,5.33318079 L2.05153526,5.33318079 L5.18649177,1.41740117 C5.40510891,1.14546277 5.34245644,0.711894323 5.08218206,0.480280124 C4.81024367,0.238001674 4.36367816,0.312318173 4.14506102,0.58425657 L0.145633676,5.58312418 C0.0326592684,5.72109292 0.00899796169,5.82406959 0,5.99969648 C0.0169961499,6.12066907 0.0676513416,6.32129029 0.145633676,6.41626878 Z" id="Fill-1" transform="translate(9.997735, 5.998717) scale(-1, 1) translate(-9.997735, -5.998717) "></path></g></g></g></svg>', '<svg class="icon-primary" width="20px" height="12px" viewBox="0 0 20 12" tabIndex="-1"><g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="Clickable/Carousel-Scroll" transform="translate(-149.000000, -6.000000)" fill="#AE9364"><g id="Icons/Arrow/Small/Gold" transform="translate(149.000000, 6.592270)"><path d="M0.145633676,6.41626878 L4.14506102,11.4151364 C4.38300712,11.7120691 4.81024367,11.7380632 5.08218206,11.5194461 C5.35412046,11.3004957 5.40510891,10.8539302 5.18649177,10.5819918 L2.05153526,6.66621216 L19.3289547,6.66621216 C19.6975379,6.66621216 19.9954704,6.36794639 19.9954704,5.99969648 C19.9954704,5.63144656 19.6975379,5.33318079 19.3289547,5.33318079 L2.05153526,5.33318079 L5.18649177,1.41740117 C5.40510891,1.14546277 5.34245644,0.711894323 5.08218206,0.480280124 C4.81024367,0.238001674 4.36367816,0.312318173 4.14506102,0.58425657 L0.145633676,5.58312418 C0.0326592684,5.72109292 0.00899796169,5.82406959 0,5.99969648 C0.0169961499,6.12066907 0.0676513416,6.32129029 0.145633676,6.41626878 Z" id="Fill-1" transform="translate(9.997735, 5.998717) scale(-1, 1) translate(-9.997735, -5.998717) "></path></g></g></g></svg>']
    });
    $(".galleryother").owlCarousel({
        loop: false,
        margin: 50,
        responsiveClass: true,
        items: 1, //10 items above 1000px browser width
        dots: false,
        nav: true,
        navText: ['<svg class="icon-primary" width="20px" height="12px" viewBox="0 0 20 12" tabIndex="-1"><g id="Modules" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="Modules-Desktop" transform="translate(-4389.000000, -8060.000000)" fill="#AE9364"><g id="Icons/Arrow/Small/Gold" transform="translate(4399.000000, 8066.000000) scale(-1, 1) translate(-4399.000000, -8066.000000) translate(4389.000000, 8060.000000)"><path d="M0.145633676,6.41626878 L4.14506102,11.4151364 C4.38300712,11.7120691 4.81024367,11.7380632 5.08218206,11.5194461 C5.35412046,11.3004957 5.40510891,10.8539302 5.18649177,10.5819918 L2.05153526,6.66621216 L19.3289547,6.66621216 C19.6975379,6.66621216 19.9954704,6.36794639 19.9954704,5.99969648 C19.9954704,5.63144656 19.6975379,5.33318079 19.3289547,5.33318079 L2.05153526,5.33318079 L5.18649177,1.41740117 C5.40510891,1.14546277 5.34245644,0.711894323 5.08218206,0.480280124 C4.81024367,0.238001674 4.36367816,0.312318173 4.14506102,0.58425657 L0.145633676,5.58312418 C0.0326592684,5.72109292 0.00899796169,5.82406959 0,5.99969648 C0.0169961499,6.12066907 0.0676513416,6.32129029 0.145633676,6.41626878 Z" id="Fill-1" transform="translate(9.997735, 5.998717) scale(-1, 1) translate(-9.997735, -5.998717) "></path></g></g></g></svg>', '<svg class="icon-primary" width="20px" height="12px" viewBox="0 0 20 12" tabIndex="-1"><g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="Clickable/Carousel-Scroll" transform="translate(-149.000000, -6.000000)" fill="#AE9364"><g id="Icons/Arrow/Small/Gold" transform="translate(149.000000, 6.592270)"><path d="M0.145633676,6.41626878 L4.14506102,11.4151364 C4.38300712,11.7120691 4.81024367,11.7380632 5.08218206,11.5194461 C5.35412046,11.3004957 5.40510891,10.8539302 5.18649177,10.5819918 L2.05153526,6.66621216 L19.3289547,6.66621216 C19.6975379,6.66621216 19.9954704,6.36794639 19.9954704,5.99969648 C19.9954704,5.63144656 19.6975379,5.33318079 19.3289547,5.33318079 L2.05153526,5.33318079 L5.18649177,1.41740117 C5.40510891,1.14546277 5.34245644,0.711894323 5.08218206,0.480280124 C4.81024367,0.238001674 4.36367816,0.312318173 4.14506102,0.58425657 L0.145633676,5.58312418 C0.0326592684,5.72109292 0.00899796169,5.82406959 0,5.99969648 C0.0169961499,6.12066907 0.0676513416,6.32129029 0.145633676,6.41626878 Z" id="Fill-1" transform="translate(9.997735, 5.998717) scale(-1, 1) translate(-9.997735, -5.998717) "></path></g></g></g></svg>']
    });
    
    $(".galleryservice").owlCarousel({
        loop: false,
        margin: 50,
        responsiveClass: true,
        items: 1, //10 items above 1000px browser width
        dots: true,
        nav: true,

        navText: ['<svg class="icon-primary" width="20px" height="12px" viewBox="0 0 20 12" tabIndex="-1"><g id="Modules" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="Modules-Desktop" transform="translate(-4389.000000, -8060.000000)" fill="#AE9364"><g id="Icons/Arrow/Small/Gold" transform="translate(4399.000000, 8066.000000) scale(-1, 1) translate(-4399.000000, -8066.000000) translate(4389.000000, 8060.000000)"><path d="M0.145633676,6.41626878 L4.14506102,11.4151364 C4.38300712,11.7120691 4.81024367,11.7380632 5.08218206,11.5194461 C5.35412046,11.3004957 5.40510891,10.8539302 5.18649177,10.5819918 L2.05153526,6.66621216 L19.3289547,6.66621216 C19.6975379,6.66621216 19.9954704,6.36794639 19.9954704,5.99969648 C19.9954704,5.63144656 19.6975379,5.33318079 19.3289547,5.33318079 L2.05153526,5.33318079 L5.18649177,1.41740117 C5.40510891,1.14546277 5.34245644,0.711894323 5.08218206,0.480280124 C4.81024367,0.238001674 4.36367816,0.312318173 4.14506102,0.58425657 L0.145633676,5.58312418 C0.0326592684,5.72109292 0.00899796169,5.82406959 0,5.99969648 C0.0169961499,6.12066907 0.0676513416,6.32129029 0.145633676,6.41626878 Z" id="Fill-1" transform="translate(9.997735, 5.998717) scale(-1, 1) translate(-9.997735, -5.998717) "></path></g></g></g></svg>', '<svg class="icon-primary" width="20px" height="12px" viewBox="0 0 20 12" tabIndex="-1"><g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="Clickable/Carousel-Scroll" transform="translate(-149.000000, -6.000000)" fill="#AE9364"><g id="Icons/Arrow/Small/Gold" transform="translate(149.000000, 6.592270)"><path d="M0.145633676,6.41626878 L4.14506102,11.4151364 C4.38300712,11.7120691 4.81024367,11.7380632 5.08218206,11.5194461 C5.35412046,11.3004957 5.40510891,10.8539302 5.18649177,10.5819918 L2.05153526,6.66621216 L19.3289547,6.66621216 C19.6975379,6.66621216 19.9954704,6.36794639 19.9954704,5.99969648 C19.9954704,5.63144656 19.6975379,5.33318079 19.3289547,5.33318079 L2.05153526,5.33318079 L5.18649177,1.41740117 C5.40510891,1.14546277 5.34245644,0.711894323 5.08218206,0.480280124 C4.81024367,0.238001674 4.36367816,0.312318173 4.14506102,0.58425657 L0.145633676,5.58312418 C0.0326592684,5.72109292 0.00899796169,5.82406959 0,5.99969648 C0.0169961499,6.12066907 0.0676513416,6.32129029 0.145633676,6.41626878 Z" id="Fill-1" transform="translate(9.997735, 5.998717) scale(-1, 1) translate(-9.997735, -5.998717) "></path></g></g></g></svg>']
   });
    $(".list-award").owlCarousel({
        loop: false,
        margin: 15,
        responsiveClass: true,
        items: 10, //10 items above 1000px browser width
        dots: false,
        nav: false,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 3

            },
            600: {
                items: 5

            },
            1000: {
                items: 10

            }
        }
    });
    $(".slider-mobile").owlCarousel({
        loop: true,
        margin: 0,
        responsiveClass: true,
        items: 1, //10 items above 1000px browser width
        dots: true,
        nav: false,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true
    });
    $(".list-hotel-home").owlCarousel({
        loop: false,
        margin: 30,
        responsiveClass: true,
        items: 1, //10 items above 1000px browser width
        dots: false,
        nav: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>']
    });
    $('.owl-carousel-other-room').owlCarousel({
        dots: false,
        loop: false,
        margin: 30,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 2
            }
        },
        navText: ['<svg class="icon-primary" width="30px" height="20px" viewBox="0 0 20 12" tabIndex="-1"><g id="Modules" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="Modules-Desktop" transform="translate(-4389.000000, -8060.000000)" fill="#AE9364"><g id="Icons/Arrow/Small/Gold" transform="translate(4399.000000, 8066.000000) scale(-1, 1) translate(-4399.000000, -8066.000000) translate(4389.000000, 8060.000000)"><path d="M0.145633676,6.41626878 L4.14506102,11.4151364 C4.38300712,11.7120691 4.81024367,11.7380632 5.08218206,11.5194461 C5.35412046,11.3004957 5.40510891,10.8539302 5.18649177,10.5819918 L2.05153526,6.66621216 L19.3289547,6.66621216 C19.6975379,6.66621216 19.9954704,6.36794639 19.9954704,5.99969648 C19.9954704,5.63144656 19.6975379,5.33318079 19.3289547,5.33318079 L2.05153526,5.33318079 L5.18649177,1.41740117 C5.40510891,1.14546277 5.34245644,0.711894323 5.08218206,0.480280124 C4.81024367,0.238001674 4.36367816,0.312318173 4.14506102,0.58425657 L0.145633676,5.58312418 C0.0326592684,5.72109292 0.00899796169,5.82406959 0,5.99969648 C0.0169961499,6.12066907 0.0676513416,6.32129029 0.145633676,6.41626878 Z" id="Fill-1" transform="translate(9.997735, 5.998717) scale(-1, 1) translate(-9.997735, -5.998717) "></path></g></g></g></svg>', '<svg class="icon-primary" width="30px" height="20px" viewBox="0 0 20 12" tabIndex="-1"><g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="Clickable/Carousel-Scroll" transform="translate(-149.000000, -6.000000)" fill="#AE9364"><g id="Icons/Arrow/Small/Gold" transform="translate(149.000000, 6.592270)"><path d="M0.145633676,6.41626878 L4.14506102,11.4151364 C4.38300712,11.7120691 4.81024367,11.7380632 5.08218206,11.5194461 C5.35412046,11.3004957 5.40510891,10.8539302 5.18649177,10.5819918 L2.05153526,6.66621216 L19.3289547,6.66621216 C19.6975379,6.66621216 19.9954704,6.36794639 19.9954704,5.99969648 C19.9954704,5.63144656 19.6975379,5.33318079 19.3289547,5.33318079 L2.05153526,5.33318079 L5.18649177,1.41740117 C5.40510891,1.14546277 5.34245644,0.711894323 5.08218206,0.480280124 C4.81024367,0.238001674 4.36367816,0.312318173 4.14506102,0.58425657 L0.145633676,5.58312418 C0.0326592684,5.72109292 0.00899796169,5.82406959 0,5.99969648 C0.0169961499,6.12066907 0.0676513416,6.32129029 0.145633676,6.41626878 Z" id="Fill-1" transform="translate(9.997735, 5.998717) scale(-1, 1) translate(-9.997735, -5.998717) "></path></g></g></g></svg>']
    });
    $('.owl-basic').owlCarousel({
        dots: false,
        loop: false,
        margin: 25,
        nav: true,
        responsive: {
            0: {
                items: 1,
                margin: 20,
            },
            600: {
                items: 1,
                margin: 20,
            },
            768: {
                items: 2,
                margin: 10,
            },
            1000: {
                items: 3
            }
        },
        navText: ['<svg aria-hidden="true" class="svg-basic" focusable="false" data-prefix="fal" data-icon="chevron-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" class="svg-inline--fa fa-chevron-left fa-w-8 fa-5x"><path fill="currentColor" d="M238.475 475.535l7.071-7.07c4.686-4.686 4.686-12.284 0-16.971L50.053 256 245.546 60.506c4.686-4.686 4.686-12.284 0-16.971l-7.071-7.07c-4.686-4.686-12.284-4.686-16.97 0L10.454 247.515c-4.686 4.686-4.686 12.284 0 16.971l211.051 211.05c4.686 4.686 12.284 4.686 16.97-.001z" class=""></path></svg>', '<svg aria-hidden="true" class="svg-basic" focusable="false" data-prefix="fal" data-icon="chevron-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" class="svg-inline--fa fa-chevron-right fa-w-8 fa-5x"><path fill="currentColor" d="M17.525 36.465l-7.071 7.07c-4.686 4.686-4.686 12.284 0 16.971L205.947 256 10.454 451.494c-4.686 4.686-4.686 12.284 0 16.971l7.071 7.07c4.686 4.686 12.284 4.686 16.97 0l211.051-211.05c4.686-4.686 4.686-12.284 0-16.971L34.495 36.465c-4.686-4.687-12.284-4.687-16.97 0z" class=""></path></svg>']
    });
    $('.owl-basic-2').owlCarousel({
        dots: false,
        loop: false,
        margin: 25,
        nav: true,
        responsive: {
            0: {
                items: 1,
                margin: 20,
            },
            600: {
                items: 1,
                margin: 20,
            },
            768: {
                items: 2,
                margin: 10,
            },
            1000: {
                items: 2
            }
        },
        navText: ['<svg aria-hidden="true" class="svg-basic" focusable="false" data-prefix="fal" data-icon="chevron-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" class="svg-inline--fa fa-chevron-left fa-w-8 fa-5x"><path fill="currentColor" d="M238.475 475.535l7.071-7.07c4.686-4.686 4.686-12.284 0-16.971L50.053 256 245.546 60.506c4.686-4.686 4.686-12.284 0-16.971l-7.071-7.07c-4.686-4.686-12.284-4.686-16.97 0L10.454 247.515c-4.686 4.686-4.686 12.284 0 16.971l211.051 211.05c4.686 4.686 12.284 4.686 16.97-.001z" class=""></path></svg>', '<svg aria-hidden="true" class="svg-basic" focusable="false" data-prefix="fal" data-icon="chevron-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" class="svg-inline--fa fa-chevron-right fa-w-8 fa-5x"><path fill="currentColor" d="M17.525 36.465l-7.071 7.07c-4.686 4.686-4.686 12.284 0 16.971L205.947 256 10.454 451.494c-4.686 4.686-4.686 12.284 0 16.971l7.071 7.07c4.686 4.686 12.284 4.686 16.97 0l211.051-211.05c4.686-4.686 4.686-12.284 0-16.971L34.495 36.465c-4.686-4.687-12.284-4.687-16.97 0z" class=""></path></svg>']
    });
    $(function () {
        $(".datepicker").datepicker({
            minDate: 0
        });
    });

    $('[data-fancybox="gallery"]').fancybox({
        // Options will go here
    });

    //$("a[rel^='prettyPhoto']").prettyPhoto();

    $(".galleryHotel").mpmansory(
        {
            childrenClass: 'item', // default is a div
            columnClasses: 'padding', //add classes to items
            breakpoints: {
                lg: 4,
                md: 4,
                sm: 6,
                xs: 12
            },
            distributeBy: { order: false, height: false, attr: 'data-order', attrOrder: 'asc' }, //default distribute by order, options => order: true/false, height: true/false, attr => 'data-order', attrOrder=> 'asc'/'desc'
            onload: function (items) {
                //make somthing with items
            }
        });


    //book tour
    $(function () {
        $("#Departure").datepicker({
            changeMonth: true,
            changeYear: true,
            minDate: new Date()
        });
    });


    //validate
    jQuery.validator.setDefaults({
        debug: true,
        success: "valid"
    });
    $("#book-tour").validate({
        rules: {
            'Departure': {
                required: true,
                date: true
            },
            'Gender': {
                required: true,
            },
            'FullName': {
                required: true,
            },
            'Country': {
                required: true,
            },
            'Email': {
                required: true,
                email: true
            },
        },
        messages: {
            'Departure': "Please enter Departure(MM/DD/YYYY)",
            'Gender': "Please select Gender",
            'FullName': "Please enter First Name",
            'Country': "Please select Country",
            'Email': "Please enter Email Adress",

        },
        submitHandler: function (form) {
            form.submit();
            LoadingSendEmail();
        }
    });

    //validate
    jQuery.validator.setDefaults({
        debug: true,
        success: "valid"
    });
    $("#update-invoice").validate({
        rules: {
            'NameCard': {
                required: true,
            },
            'CardNumber': {
                required: true,
            },
            'Month': {
                required: true,
            },
            'Year': {
                required: true,
            },
            'SecurityCode': {
                required: true,
            },
            'checkCertify': {
                required: true,
            }
        },
        messages: {
            'Departure': "Please enter Departure(MM/DD/YYYY)",
            'Gender': "Please select Gender",
            'FullName': "Please enter First Name",
            'Country': "Please select Country",
            'Email': "Please enter Email Adress",

        },
        submitHandler: function (form) {
            form.submit();
            LoadingSendEmail();
        }
    });
   

    var $st = $('.pagination');
    var $slickEl = $('.center-stick');

    $slickEl.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        var i = (currentSlide ? currentSlide : 0) + 1;
        $st.text(i + ' of ' + slick.slideCount);
    });

    $slickEl.slick({
        centerMode: true,
        centerPadding: '15%',
        slidesToShow: 1,
        focusOnSelect: true,
        dots: false,
        infinite: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });

    //hover item menu
    $("li.parent-menu-d").hover(function () {
        $(".menu-c-detail").css("display", "none");
    }, function () {
        $(".menu-c-detail").css("display", "block");
    });

});
$("#opener").on("click", function () {
    $("#dialog").dialog("open");
});
$("#close-box-search").click(function () {
    $("#dialog-mox-search").removeClass("in");
});

$(window).on('resize load', function () {
    $('.site-header iframe').each(function () {
        var self = $(this);
        var container = self.parent();

        self.css({
            width: container.width()+ 60 + "px",
            height: container.width() * (9 / 16)+ 70 + 'px',
            position: 'absolute',
            marginTop: -container.width() * (9 / 32)-35 + 'px',
            top: '50%',
            left:'0%'
        });
    });
});


// Load the IFrame Player API code asynchronously.
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
   
    player = new YT.Player('yt-player', {
        autoplay: 1,
        width: 1280,
        height: 720,
        videoId: 'NpqLMCLYHjI',
        playerVars: {
            'autoplay': 1,
            'rel': 0,
            'showinfo': 0,
            'showsearch': 0,
            'controls': 0,
            'loop': 1,
            'enablejsapi': 1,
        },
        events: {
            'onReady': onPlayerReady,
            //'onPlaybackQualityChange': onPlayerPlaybackQualityChange,
            //'onStateChange': onPlayerStateChange,
            //'onError': onPlayerError
        }
    });
    
}
function onPlayerReady(event) {
    event.target.mute();
    event.target.playVideo();
}


