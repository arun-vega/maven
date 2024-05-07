$(document).ready(function () {
    $(".testimonial-slick").slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      arrows: false,
      dots: false,
      pauseOnHover: true,
      responsive: [
        {
          breakpoint: 1704,
          settings: {
            slidesToShow: 5,
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
      prevArrow:
        '<div class=""><i class="fa-solid fa-chevron-left slick-prev"></i></div>',
      nextArrow:
        '<div class=""><i class="fa-solid fa-chevron-right slick-next"></i></div>',
    });
  });
  
  // OUR SERVICE SLICK SLIDE
  $(document).ready(function () {
    $(".our-service-slick").slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
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
      prevArrow:
        '<div class=""><i class="fa-solid fa-chevron-left slick-prev"></i></div>',
      nextArrow:
        '<div class=""><i class="fa-solid fa-chevron-right slick-next"></i></div>',
    });
  });

  function toggleButtonText() {
    var buttonText = document.getElementById("buttonText");
    buttonText.innerText = buttonText.innerText === "Read More" ? "Read Less" : "Read More";
  }