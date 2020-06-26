jQuery(document).ready(function ($) {

  var interval;
  interval = setInterval(function () {
    // moveRight();
  }, 3000);

  $('._slider').mouseover(function () {
    // clearInterval(interval);
  });

  $('._slider').mouseleave(function () {
    // interval = setInterval(function () {
    //   moveRight();
    // }, 3000);
  });

  var slideCount = $('._slider .box').length;
  var slideWidth = $('._slider .box').width();
  var slideHeight = $('._slider .box').height();
  var sliderUlWidth = slideCount * slideWidth;

  // $('.customize-container').css({ width: slideWidth, height: slideHeight });

  $('._slider').css({ width: sliderUlWidth });

  // $('._slider .box:last-child').prependTo('._slider ul');

  function moveLeft() {
    $('._slider').animate({
      left: + slideWidth
    }, 200, function () {
      $('._slider .box:last-child').prependTo('._slider');
      $('._slider').css('left', '');
    });
  };

  function moveRight() {
    $('._slider').animate({
      left: - slideWidth
    }, 200, function () {
      $('._slider .box:first-child').appendTo('._slider');
      $('._slider').css('left', '');
    });
  };

  $('._slider_prev').click(function () {
    console.log('jjell')
    moveLeft();
    return false;
  });

  $('._slider_next').click(function () {
    console.log('jjell')
    moveRight();
    return false;
  });

});    
