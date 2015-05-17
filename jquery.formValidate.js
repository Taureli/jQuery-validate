(function($){

  $.fn.validateText = function(pattern) {
    $(this).on('keydown keyup keypress', function(e){
      if(!$(this).val().match(pattern)){
        $('input[type="submit"]').attr('disabled', 'disabled');
        $(this).css({"border-color": "red",
                    "border-style": "solid"});
      } else {
        $('input[type="submit"]').removeAttr('disabled');
        $(this).css({"border-color": ""});
      }
    });
  };

  $.fn.validateEmail = function() {
    $(this).on('keydown keyup keypress', function(e){
      var mailPattern = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      if(!$(this).val().match(mailPattern)){
        $('input[type="submit"]').attr('disabled', 'disabled');
        $(this).css({"border-color": "red",
                    "border-style": "solid"});
      } else {
        $('input[type="submit"]').removeAttr('disabled');
        $(this).css({"border-color": ""});
      }
    });
  };

  $.fn.validatePostalCode = function(cityField) {
    $(this).on('keydown keyup keypress', function(e){
      var postalCodePattern = /^([0-9]{2})+\-+([0-9]{3})+$/;
      var inpField = $(this); //Needed for future reference

      if(!$(this).val().match(postalCodePattern)){
        $('input[type="submit"]').attr('disabled', 'disabled');
        $(this).css({"border-color": "red",
                    "border-style": "solid"});
      } else {
        //If input matches pattern, get JSON database
        $.getJSON('convertcsv.json', function(data){
          //Look through all data
          for(var myData in data.DANE){
            if (inpField.val().match(data.DANE[myData].KOD)){
              $(cityField).val(data.DANE[myData].MIEJSCOWOŚĆ)
              $('input[type="submit"]').removeAttr('disabled');
              inpField.css({"border-color": ""});
            }
          }
        });
      }

    });
  };

  $.fn.validatePassword = function() {
    $(this).on('keydown keyup keypress', function(e){
      var inpField = $(this); //Needed for future reference
      var uppercase = new RegExp('[A-ZĄĆĘŁŃÓŚŹŻ]');
      var lowercase = new RegExp('[a-ząćęłóńśźż]');
      var numbers = new RegExp('[0-9]');
      var strText = "Weak";
      var error = 0;  //Bool to check if input is correct

      //Password has to be at least 8 and contain uppercase, lowercase and numbers
      if(!$(this).val().match(uppercase) || !$(this).val().match(lowercase) || !$(this).val().match(numbers) || $(this).val().length < 8){
        $('input[type="submit"]').attr('disabled', 'disabled');
        $(this).css({"border-color": "red",
                    "border-style": "solid"});
        error = 1;
      } else {
        var passwdStrength = 0;
        var upCount = 0;
        var lowCount = 0;
        var numbCount = 0;
        var specialCount = 0;

        //count each type of symbol
        for(var i = 0; i < inpField.val().length; i++){
          if(uppercase.test(inpField.val().charAt(i)))
            upCount++;
          else if(lowercase.test(inpField.val().charAt(i)))
            lowCount++;
          else if(numbers.test(inpField.val().charAt(i)))
            numbCount++;
          else {
            specialCount++;
          }
        }

        //Checking password strength
        passwdStrength += inpField.val().length - 8;  //Amount of extra length
        passwdStrength += specialCount + numbCount;

        if(passwdStrength > 1 && passwdStrength < 6)
          strText = "Average";
        else if(passwdStrength > 5)
          strText = "Strong";

        $('input[type="submit"]').removeAttr('disabled');
        $(this).css({"border-color": ""});
        error = 0;
      }

      //Append label with strength
      if($(this).data('labeltxt'))
        $(this).data('labeltxt').remove();

      var label = $("<label>");
      if(!error)
        label.html("Strength: " + strText);
      else
        label.html("Has to be at least 8 characters long and contain at least one of: uppercase, lowercase and number");
      $(this).after(label);
      $(this).data('labeltxt', label);

    });
  };

})(jQuery);
