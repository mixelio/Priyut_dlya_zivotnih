$(document).ready(function () {
  $(".slider").slick({
    arrows: true,
    slidesToShow: 3,
    infinite: true,
    speed: 500,
  });
});

$(document).ready(function () {
  $(".pets_slider").slick({
    arrows: false,
    dots: true,
    slidesToShow: 1,
    infinite: true,
    fade: true,
    cssEase: "linear",
    speed: 10,
    slidesToScroll: 1,
  });
});
