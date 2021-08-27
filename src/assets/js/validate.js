$("#validate_form1").validate({
 
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
        maxlength: "Не больше 16 символов",
    },
    phone:{
      required: "Это поле обязательно",
      minlength: "Не менее 12 цифр",
      maxlength: "Не больше 12 цифр",
      digits: "Введите только цифры",
     
      
      },
    },

    errorPlacement: function ($error, $element) {
      var name = $element.attr("name");
      
      $("#error" + name).append($error);
      console.log(name);
    }
 });

 $("#validate_form2").validate({
 
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
      maxlength: "Не больше 16 символов",
  },
  phone:{
    required: "Это поле обязательно",
    minlength: "Не менее 12 цифр",
    maxlength: "Не больше 12 цифр",
    digits: "Введите только цифры",
   
    
    },
  },

  errorPlacement: function ($error, $element) {
    var name = $element.attr("name");
    
    $("#validate_form2 #error" + name).append($error);
    console.log(name);
  }
});

$("#validate_form3").validate({
 
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
      maxlength: "Не больше 16 символов",
  },
  phone:{
    required: "Это поле обязательно",
    minlength: "Не менее 12 цифр",
    maxlength: "Не больше 12 цифр",
    digits: "Введите только цифры",
   
    
    },
  },

  errorPlacement: function ($error, $element) {
    var name = $element.attr("name");
    
    $("#validate_form3 #error" + name).append($error);
    console.log(name);
  }
});

$("#validate_form4").validate({
 
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
      maxlength: "Не больше 16 символов",
  },
  phone:{
    required: "Это поле обязательно",
    minlength: "Не менее 12 цифр",
    maxlength: "Не больше 12 цифр",
    digits: "Введите только цифры",
   
    
    },
  },

  errorPlacement: function ($error, $element) {
    var name = $element.attr("name");
    
    $("#validate_form4 #error" + name).append($error);
    console.log(name);
  }
});

$("#validate_form5").validate({
 
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
      maxlength: "Не больше 16 символов",
  },
  phone:{
    required: "Это поле обязательно",
    minlength: "Не менее 12 цифр",
    maxlength: "Не больше 12 цифр",
    digits: "Введите только цифры",
   
    
    },
  },

  errorPlacement: function ($error, $element) {
    var name = $element.attr("name");
    
    $("#validate_form5 #error" + name).append($error);
    console.log(name);
  }
});