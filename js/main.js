$(function () {
  $(".header-bottom__slider").slick({
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1441,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          autoplay: false,
        },
      },
      {
        breakpoint: 1161,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          autoplay: false,
        },
      },
    ],
  });

  $(".header-btn").on("click", function () {
    $(".header-top").toggleClass("header-top--active");
  });
});
