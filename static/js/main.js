$(document).ready(function () {

    // ===== Slick Slider Syncing =====
    // Main slider (large image)
    $('.slider-main').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '.slider-nav',
        adaptiveHeight: true,
        speed: 500,
    });

    // Thumbnail navigation slider (synced with main)
    $('.slider-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.slider-main',
        dots: false,
        arrows: false,
        centerMode: false,
        focusOnSelect: true,
        infinite: true,
        responsive: [
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

    // ===== Fancybox — fullscreen gallery on click =====
    if (typeof Fancybox !== 'undefined') {
        Fancybox.bind('[data-fancybox="gallery"]', {
            // Gallery cycling
            infinite: true,
            // Toolbar buttons
            Toolbar: {
                display: {
                    left: ['infobar'],
                    middle: [],
                    right: ['slideshow', 'thumbs', 'close'],
                },
            },
            // Thumbnails strip inside Fancybox
            Thumbs: {
                type: 'classic',
            },
            // Keyboard navigation
            Keyboard: {
                Escape: 'close',
                Delete: 'close',
                Backspace: 'close',
                PageUp: 'next',
                PageDown: 'prev',
                ArrowUp: 'next',
                ArrowDown: 'prev',
                ArrowRight: 'next',
                ArrowLeft: 'prev',
            },
            // Animations
            showClass: 'f-fadeIn',
            hideClass: 'f-fadeOut',
            // Sync Fancybox with Slick: when Fancybox slide changes,
            // jump to the corresponding Slick slide
            on: {
                'Carousel.change': function (fancybox, carousel, to) {
                    var index = to;
                    if ($('.slider-main').length) {
                        $('.slider-main').slick('slickGoTo', index);
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

    // ===== Navbar active state on scroll =====
    $(window).on('scroll', function () {
        var scrollPos = $(window).scrollTop() + 100;
        $('section[id]').each(function () {
            var sectionTop = $(this).offset().top;
            var sectionBottom = sectionTop + $(this).outerHeight();
            var id = $(this).attr('id');
            if (scrollPos >= sectionTop && scrollPos < sectionBottom) {
                $('.navbar-nav .nav-link').removeClass('active');
                $('.navbar-nav .nav-link[href="#' + id + '"]').addClass('active');
            }
        });
    });
});
