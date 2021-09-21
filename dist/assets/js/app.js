/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/js/app.js":
/*!******************************!*\
  !*** ./src/assets/js/app.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("$('.banner_block_inner').css('margin-top',  '-$(this).height()/2');\r\n\r\n/* Nav*/\r\n$(\".menu_button\").click(function(event) {\r\n  event.preventDefault();\r\n  if(window.innerWidth <= 1024 ) {\r\n    $(\".menu_button\").toggleClass(\"active\");\r\n  }\r\n  // $(this).toggleClass(\"active\");\r\n\r\n  $('.sidebar_body').toggle();\r\n  if(($('.nav_show').css('display') == 'block')&&(window.innerWidth <= 1024 )) {\r\n    $('.nav_show').hide();\r\n    $('.sidebar_body').hide();\r\n    \r\n  }\r\n  \r\n  \r\n  \r\n  // if($('.nav_show').css('display') == 'block')\r\n  //   {\r\n  //     $('.background_gold').addClass('clicked');\r\n  //     $('.arrow_nav').css('content','none');\r\n      \r\n  //   } \r\n});\r\n\r\n\r\n\r\n$(\".background_gold\").click(function() {\r\n  $('.nav_show').show();\r\n  // $('.sidebar_body').toggle();\r\n  \r\n  if($('.nav_show').css('display') == 'block')\r\n    {\r\n      $('.background_gold').addClass('clicked');\r\n      $('.arrow_nav').css('content','none');\r\n      \r\n    } \r\n});\r\n\r\n$(document).on('click', function(e) {\r\n  if (!$(e.target).closest(\".sidebar\").length) {\r\n    $('.nav_show').hide();\r\n    // $(\".menu_button\").toggleClass(\"active\");\r\n  }\r\n    if ((!$(e.target).closest(\".sidebar\").length)&&(window.innerWidth <= 1024 )) {\r\n     $('.sidebar_body').hide();\r\n    \r\n  }\r\n  e.stopPropagation();\r\n  if($('.nav_show').css('display') == 'none')\r\n    {\r\n      $('.background_gold').removeClass('clicked');\r\n      $('.arrow_nav').css('content','../images/arrow_right.png');\r\n    } \r\n});\r\n\r\n$('.close_button').click(function()  {\r\n   \r\n  $('.nav_show').hide();\r\n  \r\n    \r\n});\r\n\r\n// Scroll to move \r\n\r\nlet anim = $(\".about_company\");\r\nlet animItem = $(\".block_to_move\");\r\nlet animH = anim.innerHeight();\r\nlet animEnd = $('.services_solutions').offset().top;\r\n\r\nlet scrollPos = $(window).scrollTop();\r\n\r\n console.log(scrollPos);\r\n console.log(animEnd);\r\n \r\n\r\n $(window).on(\"scroll load resize\", function() {\r\n     scrollPos = $(this).scrollTop();\r\n\r\n     if( (scrollPos >= animH)&&(scrollPos<animEnd)&&(window.innerWidth > 1024 )) {\r\n      myFunction(x);\r\n      animItem.css(\"margin-left\", \"7rem\");\r\n      animItem.css(\"transition\", \"1s\");\r\n\r\n     } else {\r\n      animItem.css(\"margin-left\", \"0\");\r\n     }\r\n });\r\n\r\n//  const mQuery = window.matchMedia('(min-width: 766px)')\r\n\r\n// function changeFontStyleMobile(e) {   \r\n//    // Проверяем, верен ли медиа-запрос\r\n//    if (e.matches)\r\n//   {     \r\n//         // Затем выводим в консоль следующее сообщение\r\n        \r\n//    } \r\n\r\n//    mQuery.addListener(changeFontStyleMobile);\r\n// } \r\n\r\nfunction myFunction(x) {\r\n  if (x.matches) { // If media query matches\r\n    console.log('Media Query Matched!')   \r\n    $('.serv_slider').removeClass('slick_slider');\r\n    $('.loans_block_slider').addClass('slick_slider');\r\n    $('.about_company_block').removeClass('block_to_move');\r\n    $('.serv_dots_inner').insertAfter('.loans_dots');\r\n    $('.clients_dots').insertAfter('.clients_dots_mobile');\r\n    // $('.banner_block_image_cover > img').attr('src', 'assets/images/start_logo2.png');\r\n    \r\n  } \r\n}\r\n\r\n\r\n\r\nvar x = window.matchMedia(\"screen and (max-width: 767px)\");\r\nmyFunction(x);\r\n\r\n// function setup_for_width(mql) {\r\n//   if (mql.matches) {\r\n//   div.addClass(\"some-class\");\r\n//   } else {\r\n//   div.removeClass(\"some-class\");\r\n//   }\r\n//   }\r\n  \r\n//   var mql = window.matchMedia(\"screen and (min-width: 768px)\");\r\n  \r\n//   mql.addListener(setup_for_width); // Добавим прослушку на смену результата\r\n  \r\n//   setup_for_width(mql); // Вызовем нашу функцию\r\n\n\n//# sourceURL=webpack:///./src/assets/js/app.js?");

/***/ }),

/***/ "./src/assets/js/slider.js":
/*!*********************************!*\
  !*** ./src/assets/js/slider.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("window.onorientationchange = function() {\r\n  slider();\r\n   \r\n};\r\n\r\nslider();\r\nfunction slider() {\r\n  $('.slick_slider').each(function(idx) {\r\n    var carouselId = \"carousel\" + idx;\r\n\r\n    $(this).slick({\r\n      \r\n      arrows: false,\r\n      fade: false,\r\n      button: true,\r\n      infinite: true,\r\n      dots: true,\r\n      appendDots: $(\"#\" + carouselId),\r\n      responsive: [\r\n        \r\n        {\r\n          breakpoint: 766,\r\n            settings: {\r\n              slidesToShow: 1,\r\n              slidesToScroll: 1,\r\n              vertical: false\r\n            }\r\n        }]\r\n      \r\n    });\r\n\r\n    $('.btn_left').on('click', function() {\r\n      var btnId = $(this).attr(\"id\");\r\n      $(`.slick_slider[id=\"${btnId}\"]`).slick('slickPrev');\r\n    \r\n    });  \r\n    \r\n    $('.btn_right').on('click', function() {\r\n      var btnId = $(this).attr(\"id\");\r\n      $(`.slick_slider[id=\"${btnId}\"]`).slick('slickNext');\r\n\r\n    }); \r\n\r\n\r\n\r\n        \r\n  });\r\n};\r\n  /* Start slider*/\r\n\r\n  // $(function() {\r\n  //     $(\"#start_slider\").slick({\r\n  //         slidesToShow: 1,\r\n  //         slidesToScroll: 1,\r\n  //         arrows: false,\r\n  //         fade: false,\r\n  //         button: true,\r\n  //         infinite: true,\r\n  //         dots: true,\r\n  //         appendDots: $('.dots_inner'),\r\n      \r\n  //     })\r\n\r\n  //     $('.start_btn_left').on('click', function() {\r\n  //         $(\"#start_slider\").slick('slickPrev');\r\n  //       });\r\n\r\n  //     $('.start_btn_right').on('click', function() {\r\n  //         $(\"#start_slider\").slick('slickNext');\r\n  //       });\r\n      \r\n  // /* Services slider*/\r\n\r\n  //   $(\".serv_slider\").slick({\r\n  //     slidesToShow: 4,\r\n  //     slidesToScroll: 1,\r\n  //     arrows: false,\r\n  //     fade: false,\r\n  //     button: true,\r\n  //     infinite: true,\r\n  //     dots: true,\r\n  //     appendDots: $('.serv_dots_inner'),\r\n    \r\n        // breakpoint: 1280,\r\n        //   settings: {\r\n        //     slidesToShow: 2,\r\n        //     slidesToScroll: 1\r\n        //   }\r\n    \r\n\r\n  //   })\r\n\r\n\r\n  //   $('.serv_btn_left').on('click', function() {\r\n  //     $(\".serv_slider\").slick('slickPrev');\r\n  //   });\r\n\r\n  //   $('.serv_btn_right').on('click', function() {\r\n  //     $(\".serv_slider\").slick('slickNext');\r\n  //   });\r\n\r\n  //   /* Clients slider*/\r\n\r\n  //       $(\".clients_blocks_inner\").slick({\r\n  //           slidesToShow: 3,\r\n  //           slidesToScroll: 1,\r\n  //           arrows: false,\r\n  //           vertical: true,\r\n  //           verticalSwiping: true,\r\n  //           infinite: true,\r\n  //           dots: true,\r\n  //           appendDots: $('.clients_dots'),\r\n  //       });\r\n\r\n  //       $('.clients_btn_left').on('click', function() {\r\n  //         $(\".clients_blocks_inner\").slick('slickPrev');\r\n  //       });\r\n\r\n  //       $('.clients_btn_right').on('click', function() {\r\n  //         $(\".clients_blocks_inner\").slick('slickNext');\r\n  //       });\r\n        \r\n  //   });\n\n//# sourceURL=webpack:///./src/assets/js/slider.js?");

/***/ }),

/***/ "./src/assets/js/validate.js":
/*!***********************************!*\
  !*** ./src/assets/js/validate.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("$.validator.methods.checkPhone = function( value, element ) {\r\n  return this.optional( element ) || /^(\\s*)?(\\+)?([- _():=+]?\\d[- _():=+]?){10,14}(\\s*)?$/.test( value );\r\n};\r\n\r\nconst $form = $(this);\r\n\r\n$(\"form\").validate({\r\n  \r\n    rules:{\r\n        yourName:{\r\n         required: true,\r\n         minlength: 4,\r\n         maxlength: 16,\r\n         \r\n         \r\n        },\r\n        phone:{\r\n         required: true,\r\n         checkPhone: true,\r\n         minlength: 10,\r\n         maxlength: 16,\r\n         \r\n        },\r\n    },\r\n    messages:{\r\n      yourName:{\r\n        required: \"Это поле обязательно\",\r\n        minlength: \"Имя минимум 4 символа\",\r\n        maxlength: \"Не больше 16 символов\",\r\n    },\r\n    phone:{\r\n      required: \"Это поле обязательно\",\r\n      minlength: \"Не менее 10 знаков\",\r\n      maxlength: \"Не больше 16 знаков\",\r\n      checkPhone: \"Неправильный формат\",\r\n      \r\n      \r\n      },\r\n    },\r\n    \r\n      submitHandler: function(e) {\r\n        \r\n        $.ajax({\r\n          type: $form.attr('method'),\r\n          url: $form.attr('action'),\r\n          data: $form.serialize()\r\n        }).done(function() {\r\n          console.log('success');\r\n          $('form').trigger(\"reset\");\r\n        }).fail(function() {\r\n          console.log('fail');\r\n        });\r\n      \r\n    },\r\n\r\n    errorPlacement: function ($error, $element) {\r\n      var name = $element.attr(\"name\");\r\n      \r\n      $(\"#error\" + name).append($error);\r\n      console.log(name);\r\n    }\r\n });\r\n\r\n \n\n//# sourceURL=webpack:///./src/assets/js/validate.js?");

/***/ }),

/***/ 0:
/*!******************************************************************************************!*\
  !*** multi ./src/assets/js/app.js ./src/assets/js/slider.js ./src/assets/js/validate.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! C:\\Users\\Віталій\\Desktop\\verstka\\Sheepfish\\TechnoK\\src\\assets\\js\\app.js */\"./src/assets/js/app.js\");\n__webpack_require__(/*! C:\\Users\\Віталій\\Desktop\\verstka\\Sheepfish\\TechnoK\\src\\assets\\js\\slider.js */\"./src/assets/js/slider.js\");\nmodule.exports = __webpack_require__(/*! C:\\Users\\Віталій\\Desktop\\verstka\\Sheepfish\\TechnoK\\src\\assets\\js\\validate.js */\"./src/assets/js/validate.js\");\n\n\n//# sourceURL=webpack:///multi_./src/assets/js/app.js_./src/assets/js/slider.js_./src/assets/js/validate.js?");

/***/ })

/******/ });