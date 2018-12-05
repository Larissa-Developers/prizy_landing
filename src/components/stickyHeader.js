import $ from 'jquery'

$(window).scroll(function() {
  if ($(window).scrollTop() >= 70.8) {
    $('header').addClass('header_fixed')
  } else {
    $('header').removeClass('header_fixed')
  }
})
