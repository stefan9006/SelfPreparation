$(document).ready(function(){
  $('.sliderImg').slick({						
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true
  });
$('.fade').slick({
  dots: false,
  infinite: true,
  speed: 1200,
  fade: true,
  cssEase: 'linear',
  autoplay: true,
  autoplaySpeed: 4000,
});
});

