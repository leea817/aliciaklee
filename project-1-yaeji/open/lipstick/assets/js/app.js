$('.light').hover(function() {
  // mouseon
  $(this).addClass('hover');
  $(this).addClass('show');
  $('.tag, .one').addClass('show');

}, function() {
  // mouseout
  $(this).removeClass('hover');
  $(this).removeClass('show');
  $('.space, .tag, .title').removeClass('show');
})



$('.dark').hover(function() {
  // mouseon
  $(this).addClass('hover');
  $(this).addClass('show');
  $('.tag, .two').addClass('show');

}, 

function() {
  // mouseout
  $(this).removeClass('hover');
  $(this).removeClass('show');
  $('.space, .tag, .title').removeClass('show');
})



$('.mix').hover(function() {
  // mouseon
  $(this).addClass('hover');
  $(this).addClass('show');
  $('.tag, .three').addClass('show');


}, 
function() {
  // mouseout
  $(this).removeClass('hover');
  $(this).removeClass('show');
  $('.space, .tag, .title').removeClass('show');
})
