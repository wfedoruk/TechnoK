$('.banner_block_inner').css('margin-top',  '-$(this).height()/2');

/* Nav*/
$(".menu_button").click(function(event) {
  event.preventDefault();
  if(window.innerWidth <= 1024 ) {
    $(".menu_button").toggleClass("active");
  }
  // $(this).toggleClass("active");

  $('.sidebar_body').toggle();
  if(($('.nav_show').css('display') == 'block')&&(window.innerWidth <= 1024 )) {
    $('.nav_show').hide();
    $('.sidebar_body').hide();
    
  }
  
  
  
  // if($('.nav_show').css('display') == 'block')
  //   {
  //     $('.background_gold').addClass('clicked');
  //     $('.arrow_nav').css('content','none');
      
  //   } 
});



$(".background_gold").click(function() {
  $('.nav_show').show();
  // $('.sidebar_body').toggle();
  
  if($('.nav_show').css('display') == 'block')
    {
      $('.background_gold').addClass('clicked');
      $('.arrow_nav').css('content','none');
      
    } 
});

$(document).on('click', function(e) {
  if (!$(e.target).closest(".sidebar").length) {
    $('.nav_show').hide();
    // $(".menu_button").toggleClass("active");
  }
    if ((!$(e.target).closest(".sidebar").length)&&(window.innerWidth <= 1024 )) {
     $('.sidebar_body').hide();
    
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

// Scroll to move 

let anim = $(".about_company");
let animItem = $(".block_to_move");
let animH = anim.innerHeight();
let animEnd = $('.services_solutions').offset().top;

let scrollPos = $(window).scrollTop();

 console.log(scrollPos);
 console.log(animEnd);
 

 $(window).on("scroll load resize", function() {
     scrollPos = $(this).scrollTop();

     if( (scrollPos >= animH)&&(scrollPos<animEnd)&&(window.innerWidth > 1024 )) {
      myFunction(x);
      animItem.css("margin-left", "7rem");
      animItem.css("transition", "1s");

     } else {
      animItem.css("margin-left", "0");
     }
 });

//  const mQuery = window.matchMedia('(min-width: 766px)')

// function changeFontStyleMobile(e) {   
//    // Проверяем, верен ли медиа-запрос
//    if (e.matches)
//   {     
//         // Затем выводим в консоль следующее сообщение
        
//    } 

//    mQuery.addListener(changeFontStyleMobile);
// } 

function myFunction(x) {
  if (x.matches) { // If media query matches
    console.log('Media Query Matched!')   
    $('.serv_slider').removeClass('slick_slider');
    $('.loans_block_slider').addClass('slick_slider');
    $('.about_company_block').removeClass('block_to_move');
    $('.serv_dots_inner').insertAfter('.loans_dots');
    $('.clients_dots').insertAfter('.clients_dots_mobile');
    // $('.banner_block_image_cover > img').attr('src', 'assets/images/start_logo2.png');
    
  } 
}



var x = window.matchMedia("screen and (max-width: 767px)");
myFunction(x);

// function setup_for_width(mql) {
//   if (mql.matches) {
//   div.addClass("some-class");
//   } else {
//   div.removeClass("some-class");
//   }
//   }
  
//   var mql = window.matchMedia("screen and (min-width: 768px)");
  
//   mql.addListener(setup_for_width); // Добавим прослушку на смену результата
  
//   setup_for_width(mql); // Вызовем нашу функцию
