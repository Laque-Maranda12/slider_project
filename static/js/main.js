$(document).ready(function () {

    // ===== Slick Slider Syncing =====

    // Main slider — large image, fade transition, synced with nav
    $('.slider-main').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav',
        adaptiveHeight: false,
        speed: 500,
        infinite: true,
    });

    // Thumbnail navigation slider — synced with main
    $('.slider-nav').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.slider-main',
        dots: false,
        arrows: false,           // We use custom external arrows
        centerMode: false,
        focusOnSelect: true,
        infinite: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    });

    // Custom red circular arrow buttons → control the nav slider
    $('.slider-nav-prev').on('click', function () {
        $('.slider-nav').slick('slickPrev');
    });

    $('.slider-nav-next').on('click', function () {
        $('.slider-nav').slick('slickNext');
    });

    // ===== Fancybox — fullscreen gallery on click =====
    if (typeof Fancybox !== 'undefined') {
        Fancybox.bind('[data-fancybox="gallery"]', {
            infinite: true,
            Toolbar: {
                display: {
                    left: ['infobar'],
                    middle: [],
                    right: ['slideshow', 'thumbs', 'close'],
                },
            },
            Thumbs: {
                type: 'classic',
            },
            showClass: 'f-fadeIn',
            hideClass: 'f-fadeOut',
            // Sync Fancybox with Slick on slide change
            on: {
                'Carousel.change': function (fancybox, carousel, to) {
                    if ($('.slider-main').length) {
                        $('.slider-main').slick('slickGoTo', to);
                    }
                },
            },
        });
    }

    // ===== Smooth scrolling for nav links =====
    $('a[href^="#"]').on('click', function (e) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            e.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top - 70
            }, 600);
        }
    });
});
