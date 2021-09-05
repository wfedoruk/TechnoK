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

eval("/* Nav*/\r\n\r\n\r\n$(\".background_gold, .menu_button\").click(function() {\r\n  $('.nav_show').show();\r\n  \r\n  if($('.nav_show').css('display') == 'block')\r\n    {\r\n      $('.background_gold').addClass('clicked');\r\n      \r\n    } \r\n});\r\n\r\n$(document).on('click', function(e) {\r\n  if (!$(e.target).closest(\".sidebar\").length) {\r\n    $('.nav_show').hide();\r\n    \r\n  }\r\n  e.stopPropagation();\r\n  if($('.nav_show').css('display') == 'none')\r\n    {\r\n      $('.background_gold').removeClass('clicked');\r\n      \r\n    } \r\n});\r\n\r\n$('.close_button').click(function()  {\r\n   \r\n  $('.nav_show').hide();\r\n    \r\n})\r\n\r\n\r\nconst screenWidth = window.screen.width\r\nconst screenHeight = window.screen.height\r\n\r\nconsole.log(screenWidth)\r\nconsole.log(screenHeight)\r\n\r\nconst windowInnerWidth = window.innerWidth\r\nconst windowInnerHeight = window.innerHeight\r\n\r\n\r\nconsole.log(windowInnerWidth)\r\nconsole.log(windowInnerHeight)\n\n//# sourceURL=webpack:///./src/assets/js/app.js?");

/***/ }),

/***/ "./src/assets/js/slider.js":
/*!*********************************!*\
  !*** ./src/assets/js/slider.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\r\n$('.slick_slider').each(function(idx) {\r\n  var carouselId = \"carousel\" + idx;\r\n\r\n  $(this).slick({\r\n    \r\n    arrows: false,\r\n    fade: false,\r\n    button: true,\r\n    infinite: true,\r\n    dots: true,\r\n    appendDots: $(\"#\" + carouselId)\r\n    \r\n  });\r\n \r\n  $('.btn_left').on('click', function() {\r\n    var btnId = $(this).attr(\"id\");\r\n     $(`.slick_slider[id=\"${btnId}\"]`).slick('slickPrev');\r\n  \r\n  });  \r\n  \r\n  $('.btn_right').on('click', function() {\r\n    var btnId = $(this).attr(\"id\");\r\n    $(`.slick_slider[id=\"${btnId}\"]`).slick('slickNext');\r\n \r\n  }); \r\n\r\n      \r\n});\r\n\r\n\r\n/* Start slider*/\r\n\r\n// $(function() {\r\n//     $(\"#start_slider\").slick({\r\n//         slidesToShow: 1,\r\n//         slidesToScroll: 1,\r\n//         arrows: false,\r\n//         fade: false,\r\n//         button: true,\r\n//         infinite: true,\r\n//         dots: true,\r\n//         appendDots: $('.dots_inner'),\r\n    \r\n//     })\r\n\r\n//     $('.start_btn_left').on('click', function() {\r\n//         $(\"#start_slider\").slick('slickPrev');\r\n//       });\r\n\r\n//     $('.start_btn_right').on('click', function() {\r\n//         $(\"#start_slider\").slick('slickNext');\r\n//       });\r\n    \r\n// /* Services slider*/\r\n\r\n//   $(\".serv_slider\").slick({\r\n//     slidesToShow: 4,\r\n//     slidesToScroll: 1,\r\n//     arrows: false,\r\n//     fade: false,\r\n//     button: true,\r\n//     infinite: true,\r\n//     dots: true,\r\n//     appendDots: $('.serv_dots_inner'),\r\n//     // responsive: [\r\n//     // {\r\n//     //   breakpoint: 1440,\r\n//     //   settings: {\r\n//     //     slidesToShow: 3,\r\n//     //     slidesToScroll: 1,\r\n//     //   }\r\n//     //     },\r\n//     // {\r\n//     //   // breakpoint: 1280,\r\n//     //   //   settings: {\r\n//     //   //     slidesToShow: 2,\r\n//     //   //     slidesToScroll: 1\r\n//     //   //   }\r\n//     // }]\r\n\r\n//   })\r\n\r\n\r\n//   $('.serv_btn_left').on('click', function() {\r\n//     $(\".serv_slider\").slick('slickPrev');\r\n//   });\r\n\r\n//   $('.serv_btn_right').on('click', function() {\r\n//     $(\".serv_slider\").slick('slickNext');\r\n//   });\r\n\r\n//   /* Clients slider*/\r\n\r\n//       $(\".clients_blocks_inner\").slick({\r\n//           slidesToShow: 3,\r\n//           slidesToScroll: 1,\r\n//           arrows: false,\r\n//           vertical: true,\r\n//           verticalSwiping: true,\r\n//           infinite: true,\r\n//           dots: true,\r\n//           appendDots: $('.clients_dots'),\r\n//       });\r\n\r\n//       $('.clients_btn_left').on('click', function() {\r\n//         $(\".clients_blocks_inner\").slick('slickPrev');\r\n//       });\r\n\r\n//       $('.clients_btn_right').on('click', function() {\r\n//         $(\".clients_blocks_inner\").slick('slickNext');\r\n//       });\r\n      \r\n//   });\n\n//# sourceURL=webpack:///./src/assets/js/slider.js?");

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