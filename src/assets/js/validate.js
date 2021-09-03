$.validator.methods.checkPhone = function( value, element ) {
  return this.optional( element ) || /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/.test( value );
};

const $form = $(this);

$("form").validate({
  
    rules:{
        yourName:{
         required: true,
         minlength: 4,
         maxlength: 16,
         
         
        },
        phone:{
         required: true,
         checkPhone: true,
         minlength: 10,
         maxlength: 16,
         
        },
    },
    messages:{
      yourName:{
        required: "Это поле обязательно",
        minlength: "Имя минимум 4 символа",
        maxlength: "Не больше 16 символов",
    },
    phone:{
      required: "Это поле обязательно",
      minlength: "Не менее 10 знаков",
      maxlength: "Не больше 16 знаков",
      checkPhone: "Неправильный формат",
      
      
      },
    },
    
      submitHandler: function(e) {
        
        $.ajax({
          type: $form.attr('method'),
          url: $form.attr('action'),
          data: $form.serialize()
        }).done(function() {
          console.log('success');
          $('form').trigger("reset");
        }).fail(function() {
          console.log('fail');
        });
      
    },

    errorPlacement: function ($error, $element) {
      var name = $element.attr("name");
      
      $("#error" + name).append($error);
      console.log(name);
    }
 });

 