(function($){

  $.fn.validateText = function(pattern) {
    console.log(this);
    $(this).on('keydown keyup keypress', function(e){
      console.log("KEY");
      if(!$(this).val().match(pattern)){
        $('input[type="submit"]').attr('disabled', 'disabled');
      } else {
        $('input[type="submit"]').removeAttr('disabled');
      }
    });
  };

})(jQuery);
