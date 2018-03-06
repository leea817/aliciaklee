$('.space').hover(function() {
  // mouseon
  $(this).addClass('hover');
  $(this).addClass('show');
  $('.tag, .minicream').addClass('show');

}, function() {
  // mouseout
  $(this).removeClass('hover');
  $(this).removeClass('show');
  $('.tag, .minicream').removeClass('show');
})

