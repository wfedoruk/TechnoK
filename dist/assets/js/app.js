!function(e){var n={};function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(o,r,function(n){return e[n]}.bind(null,r));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){t(1),t(2),e.exports=t(3)},function(e,n){$(".background_gold, .menu_button").click((function(){$(".nav_show").show(),"block"==$(".nav_show").css("display")&&($(".background_gold").addClass("clicked"),$(".arrow_nav").css("content","none"))})),$(document).on("click",(function(e){$(e.target).closest(".sidebar").length||$(".nav_show").hide(),e.stopPropagation(),"none"==$(".nav_show").css("display")&&($(".background_gold").removeClass("clicked"),$(".arrow_nav").css("content","../images/arrow_right.png"))})),$(".close_button").click((function(){$(".nav_show").hide()}))},function(e,n){$(".slick_slider").each((function(e){var n="carousel"+e;$(this).slick({arrows:!1,fade:!1,button:!0,infinite:!0,dots:!0,appendDots:$("#"+n)}),$(".btn_left").on("click",(function(){var e=$(this).attr("id");$('.slick_slider[id="'.concat(e,'"]')).slick("slickPrev")})),$(".btn_right").on("click",(function(){var e=$(this).attr("id");$('.slick_slider[id="'.concat(e,'"]')).slick("slickNext")}))}))},function(e,n){$.validator.methods.checkPhone=function(e,n){return this.optional(n)||/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/.test(e)};var t=$(this);$("form").validate({rules:{yourName:{required:!0,minlength:4,maxlength:16},phone:{required:!0,checkPhone:!0,minlength:10,maxlength:16}},messages:{yourName:{required:"Это поле обязательно",minlength:"Имя минимум 4 символа",maxlength:"Не больше 16 символов"},phone:{required:"Это поле обязательно",minlength:"Не менее 10 знаков",maxlength:"Не больше 16 знаков",checkPhone:"Неправильный формат"}},submitHandler:function(e){$.ajax({type:t.attr("method"),url:t.attr("action"),data:t.serialize()}).done((function(){console.log("success"),$("form").trigger("reset")})).fail((function(){console.log("fail")}))},errorPlacement:function(e,n){var t=n.attr("name");$("#error"+t).append(e),console.log(t)}})}]);