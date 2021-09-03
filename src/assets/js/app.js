/* Nav*/


$(".background_gold, .menu_button").click(function() {
  $('.nav_show').show();
  
  if($('.nav_show').css('display') == 'block')
    {
      $('.background_gold').addClass('clicked');
      
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
      
    } 
});

$('.close_button').click(function()  {
   
  $('.nav_show').hide();
    
})




