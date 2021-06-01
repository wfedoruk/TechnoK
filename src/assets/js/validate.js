$("#validate_form").validate({
 
    rules:{
       yourName:{
         required: true,
         minlength: 4,
         maxlength: 16,
       },
       phone:{
         required: true,
         digits: true,
         minlength: 11,
         maxlength: 11,
         
       },
    },
    messages:{
      yourName:{
        required: "Это поле обязательно",
        minlength: "Имя минимум 4 символа",
        maxlength: "Максимальное число символов - 16",
    },
    phone:{
      required: "Это поле обязательно",
      minlength: "Телефон минимум 12 цифр",
      maxlength: "Максимальное число цифр - 12",
      digits: "Введите только цифры",
     
      
      },
    },

    errorPlacement: function ($error, $element) {
      var name = $element.attr("name");
      
      $("#error" + name).append($error);
      console.log(name);
    }
 });