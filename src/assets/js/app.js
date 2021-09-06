/* Nav*/


$(".background_gold, .menu_button").click(function() {
  $('.nav_show').show();
  
  if($('.nav_show').css('display') == 'block')
    {
      $('.background_gold').addClass('clicked');
      $('.arrow_nav').css('content','none');
      
    } 
});

$(document).on('click', function(e) {
  if (!$(e.target).closest(".sidebar").length) {
    $('.nav_show').hide();
    
  }
  e.stopPropagation();
  if($('.nav_show').css('display') == 'none')
    {
      $('.background_gold').removeClass('clicked');
      $('.arrow_nav').css('content','../images/arrow_right.png');
    } 
});

$('.close_button').click(function()  {
   
  $('.nav_show').hide();
    
});


// const screenWidth = window.screen.width
// const screenHeight = window.screen.height

// console.log(screenWidth);
// console.log(screenHeight);

// const windowInnerWidth = window.innerWidth
// const windowInnerHeight = window.innerHeight


// console.log(windowInnerWidth)
// console.log(windowInnerHeight)