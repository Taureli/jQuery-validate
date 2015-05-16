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

  $.fn.validatePostalCode = function() {
    $(this).on('keydown keyup keypress', function(e){
      var postalCodePattern = /^([0-9]{2})+\-+([0-9]{3})+$/;
      if(!$(this).val().match(postalCodePattern)){
        $('input[type="submit"]').attr('disabled', 'disabled');
        $(this).css({"border-color": "red",
                    "border-style": "solid"});
      } else {
        $('input[type="submit"]').removeAttr('disabled');
        $(this).css({"border-color": ""});
      }
    });
  };

})(jQuery);
