$('.space').hover(function() {
  // mouseon
  $(this).addClass('hover');
  $(this).addClass('show');
  $('.tag, .fog').addClass('show');

}, function() {
  // mouseout
  $(this).removeClass('hover');
  $(this).removeClass('show');
  $('.tag, .fog').removeClass('show');
})

