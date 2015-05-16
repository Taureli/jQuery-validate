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

})(jQuery);
