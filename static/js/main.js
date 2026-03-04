$(document).ready(function () {

    /* ===== Slick Slider Syncing ===== */

    // Main big slider
    $('.slider-for').slick({
        slidesToShow:   1,
        slidesToScroll: 1,
        arrows:         false,
        fade:           true,
        asNavFor:       '.slider-thumbs',
        adaptiveHeight: false,
        speed:          400,
        infinite:       true
    });

    // Thumbnails nav (synced with main)
    $('.slider-thumbs').slick({
        slidesToShow:   5,
        slidesToScroll: 1,
        asNavFor:       '.slider-for',
        dots:           false,
        arrows:         false,
        focusOnSelect:  true,
        infinite:       true,
        responsive: [
            { breakpoint: 992, settings: { slidesToShow: 4 } },
            { breakpoint: 768, settings: { slidesToShow: 3 } },
            { breakpoint: 480, settings: { slidesToShow: 2 } }
        ]
    });

    // External red circle arrows
    $('.thumb-prev').on('click', function () {
        $('.slider-thumbs').slick('slickPrev');
    });
    $('.thumb-next').on('click', function () {
        $('.slider-thumbs').slick('slickNext');
    });

    /* ===== Fancybox 5 — fullscreen gallery ===== */
    if (typeof Fancybox !== 'undefined') {
        Fancybox.bind('[data-fancybox="gallery"]', {
            infinite: true,
            Toolbar: {
                display: {
                    left:   ['infobar'],
                    middle: [],
                    right:  ['slideshow', 'thumbs', 'close']
                }
            },
            Thumbs: { type: 'classic' },
            showClass: 'f-fadeIn',
            hideClass: 'f-fadeOut',
            on: {
                // Keep Slick in sync when Fancybox slide changes
                'Carousel.change': function (_fancybox, _carousel, to) {
                    $('.slider-for').slick('slickGoTo', to);
                }
            }
        });
    }

    /* ===== Smooth scroll for anchor links ===== */
    $('a[href^="#"]').on('click', function (e) {
        var $target = $(this.getAttribute('href'));
        if ($target.length) {
            e.preventDefault();
            $('html, body').stop().animate({
                scrollTop: $target.offset().top - 65
            }, 500);
        }
    });
});
