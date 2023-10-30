/* Carousel stuff-------------------------------- */

$(document).ready(function () {
    /* main carousel */
    $('.main-slide').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        autoplay: true,
        autoplaySpeed: 15000,
        asNavFor: '.center-slider',
    });

    /* nav carousel */
    $('.center-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        arrows: false,
        dots: false,
        speed: 300,
        centerPadding: '0px',
        infinite: true,
        autoplaySpeed: 15000,
        autoplay: true,
        asNavFor: '.main-slide',
        focusOnSelect: true,
        responsive: [
        {
            breakpoint: 800,
            settings: {
            slidesToShow: 5,
            infinite: true,
            slidesToScroll: 1,
            }
        },
        {
            breakpoint: 570,
            settings: {
            slidesToShow: 3,
            slidesToScroll: 1
            }
        },
        ]
    });

    
    

    

    /* pause and playvideo when slide change */
    $(window).on('resize', function() {
        /* Video casousel autoplay */
        if($(window).width() < 800) {
            /* pause all video at small width - when slide is img */
            $('.main-slide iframe').each(function () {
                var src = $(this).attr('src');
                src = src.replace(/autoplay=\d/, 'autoplay=0');
                $(this).attr('src', src);
            });
        }
        else {
            /* autoplay only current slide, pause other slide */
            $('.main-slide').on('beforeChange', function(event, slick, currentSlide, nextSlide){

                var $currentSlideIframe = $(slick.$slides[currentSlide]).find('iframe');
                var $nextSlideIframe = $(slick.$slides[nextSlide]).find('iframe');

                $currentSlideIframe.attr('src', function(_, value) {
                    return value.replace('autoplay=1', 'autoplay=0');
                });
                $nextSlideIframe.attr('src', function(_, value) {
                    return value.replace('autoplay=0', 'autoplay=1');
                });
            });
        }
    });



    /* comming soon list slide */
    let movieSlider = $('.comming-soon');
    let movieSliderSettings = {
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        speed: 300,
        infinite: true,
        autoplay: false,
    }



    $(window).on('resize', function() {
    if ($(window).width() >= 768) 
    {
        if (movieSlider.hasClass('slick-initialized')) {
            movieSlider.slick('unslick');
        }
        return;
    }
    else if (!movieSlider.hasClass('slick-initialized')) 
    {
        return movieSlider.slick(movieSliderSettings);
    }
    });

    $(window).trigger('resize');

});



