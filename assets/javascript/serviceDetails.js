$(document).ready(function () {
    $(".ser-detail-Slick-Slide").slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1500,
      arrows: false,
      dots: false,
      pauseOnHover: true,
      responsive: [
        {
          breakpoint: 1704,
          settings: {
            slidesToShow: 4,
          },
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 4,
          },
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
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
  