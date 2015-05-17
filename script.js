$(document).ready(function(){
  $('.login').validateText(/^[A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłóńśźż]*$/);
  $('.email').validateEmail();
  $('.postalCode').validatePostalCode('.city');
  //$('.password').validatePassword();
  $('.password').validatePasswordStrengthOnly();
});
