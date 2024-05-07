$(document).ready(function () {
    $(".centero-excellence").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        dots: true,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1704,
                settings: {
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 440,
                settings: {
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 320,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
        prevArrow:
            '<div class="rev-but"><i class="fa-solid fa-circle-arrow-left fa-3x p-2 icon1 "></i></div>',
        nextArrow:
            '<div class="rev-but"><i class="fa-solid fa-circle-arrow-right fa-3x p-2 icon23 "></i></div>',
    });
});

$(document).ready(function () {
    $(".blogs-corousal").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        arrows: false,
        dots: false,
        pauseOnHover: true,
        vertical: true,
        infinite: true,
        responsive: [
            {
                breakpoint: 1704,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 440,
                settings: {
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 320,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],

    });
});

