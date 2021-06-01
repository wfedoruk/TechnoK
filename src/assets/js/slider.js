/* Start slider*/

$(function() {
    $("#start_slider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: false,
        button: true,
        infinite: true,
        dots: true,
        appendDots: $('.dots_inner'),
    
    })

    $('.arrow_left').on('click', function() {
        $("#start_slider").slick('slickPrev');
      });

    $('.arrow_right').on('click', function() {
        $("#start_slider").slick('slickNext');
      });
    
/* Services slider*/

  $(".serv_slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    fade: false,
    button: true,
    infinite: true,
    dots: true,
    appendDots: $('.serv_dots_inner'),
    responsive: [
    {
      breakpoint: 1680,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
        },
    {
      breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
    }]

  })


  $('.serv_arrow_left').on('click', function() {
    $(".serv_slider").slick('slickPrev');
  });

  $('.serv_arrow_right').on('click', function() {
    $(".serv_slider").slick('slickNext');
  });

  /* Clients slider*/

      $(".clients_blocks_inner").slick({
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false,
          vertical: true,
          verticalSwiping: true,
          infinite: true,
          dots: true,
          appendDots: $('.clients_dots'),
      });

      $('.clients_arrow_left').on('click', function() {
        $(".clients_blocks_inner").slick('slickPrev');
      });

      $('.clients_arrow_right').on('click', function() {
        $(".clients_blocks_inner").slick('slickNext');
      });
      
  });