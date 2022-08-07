$(document).ready(function () {
    //  Service Accordion Starts
    $('.example-opensingle').beefup({
        openSingle: true,
        openClass: 'is-open'
    });
    //  Service Accordion Ends

    //  Venobox Activation for video Starts
    $('.venobox').venobox();
    //  Venobox Activation for video Ends

    //  Venobox Activation for service images Starts
    $('.serviceSlides').venobox();
    //  Venobox Activation for service images Ends

    //  Back to Top function Starts
    $('.backToTop').click(function () {
        $('html, body').animate({
            scrollTop: 0
        },
            1200
        )
    });
    $(window).scroll(function () {
        var scrolling = $(this).scrollTop();
        if (scrolling > 200) {
            $('.backToTop').fadeIn();
        }
        else {
            $('.backToTop').fadeOut(1000);
        }
    });
    //  Back to Top function Ends

    //  Slick Slider for blog Starts
    $('.blog-section').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: '.blog-navigation-right',
        prevArrow: '.blog-navigation-left'
    });
    //  Slick Slider for blog Ends

    //  Slick Slider for testiomnial Starts
    $('.testimonial-section').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: '.testimonial-navigation-right',
        prevArrow: '.testimonial-navigation-left'
    });
    //  Slick Slider for testiomnial Ends

    //animation scroll js Starts
    var html_body = $('html, body');
    $('.main-menu a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 70
                }, 1500);
                return false;
            }
        }
    });
    //animation scroll js Ends

    // Sticky Menu Starts
    $(window).scroll(function () {
        var scrollin = $(this).scrollTop();
        if (scrollin > 150) {
            $('header').addClass('nav_bg');
        }
        else {
            $('header').removeClass('nav_bg');
        }
    });
    // Sticky Menu Ends
});









