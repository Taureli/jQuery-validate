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

})(jQuery);
