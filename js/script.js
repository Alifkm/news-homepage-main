$(document).ready(function() {

  if($( window ).width() >= 992) {
    $('.nav__menu').removeClass('active');
    $('.nav__bar-wrapper').removeClass('active');
  }else {
    $('#bar').click(function() {
      $('.nav__menu').toggleClass('active');
      $('.nav__bar-wrapper').toggleClass('active');
    })
  }

});