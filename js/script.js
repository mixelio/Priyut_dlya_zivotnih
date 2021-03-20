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
    arrows: true,
    dots: true,
    slidesToShow: 4,
    infinite: true,
    speed: 500,
    rows: 2,
    slidesToScroll: 4,
  });
});
