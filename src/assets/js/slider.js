window.onorientationchange = function() {
  slider();
   
};

slider();
function slider() {
  $('.slick_slider').each(function(idx) {
    var carouselId = "carousel" + idx;

    $(this).slick({
      
      arrows: false,
      fade: false,
      button: true,
      infinite: true,
      dots: true,
      appendDots: $("#" + carouselId),
      responsive: [
        
        {
          breakpoint: 766,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              vertical: false
            }
        }]
      
    });

    $('.btn_left').on('click', function() {
      var btnId = $(this).attr("id");
      $(`.slick_slider[id="${btnId}"]`).slick('slickPrev');
    
    });  
    
    $('.btn_right').on('click', function() {
      var btnId = $(this).attr("id");
      $(`.slick_slider[id="${btnId}"]`).slick('slickNext');

    }); 



        
  });
};
  /* Start slider*/

  // $(function() {
  //     $("#start_slider").slick({
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //         arrows: false,
  //         fade: false,
  //         button: true,
  //         infinite: true,
  //         dots: true,
  //         appendDots: $('.dots_inner'),
      
  //     })

  //     $('.start_btn_left').on('click', function() {
  //         $("#start_slider").slick('slickPrev');
  //       });

  //     $('.start_btn_right').on('click', function() {
  //         $("#start_slider").slick('slickNext');
  //       });
      
  // /* Services slider*/

  //   $(".serv_slider").slick({
  //     slidesToShow: 4,
  //     slidesToScroll: 1,
  //     arrows: false,
  //     fade: false,
  //     button: true,
  //     infinite: true,
  //     dots: true,
  //     appendDots: $('.serv_dots_inner'),
    
        // breakpoint: 1280,
        //   settings: {
        //     slidesToShow: 2,
        //     slidesToScroll: 1
        //   }
    

  //   })


  //   $('.serv_btn_left').on('click', function() {
  //     $(".serv_slider").slick('slickPrev');
  //   });

  //   $('.serv_btn_right').on('click', function() {
  //     $(".serv_slider").slick('slickNext');
  //   });

  //   /* Clients slider*/

  //       $(".clients_blocks_inner").slick({
  //           slidesToShow: 3,
  //           slidesToScroll: 1,
  //           arrows: false,
  //           vertical: true,
  //           verticalSwiping: true,
  //           infinite: true,
  //           dots: true,
  //           appendDots: $('.clients_dots'),
  //       });

  //       $('.clients_btn_left').on('click', function() {
  //         $(".clients_blocks_inner").slick('slickPrev');
  //       });

  //       $('.clients_btn_right').on('click', function() {
  //         $(".clients_blocks_inner").slick('slickNext');
  //       });
        
  //   });