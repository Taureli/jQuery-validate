#jQuery plugin for form validations
Author: Jakub Karolczak

##How to use
####Text validation

```
$('.FIELD_TO_VALIDATE').validateText(PATTERN);
```

For example:

```
$('.login').validateText(/^[A-ZĄĆĘŁŃÓŚŹŻ][a-ząćęłóńśźż]*$/);
```

####Email validaton

```
$('.FIELD_TO_VALIDATE').validateEmail();
```

For example:

```
$('.email').validateEmail();
```

####Postal code validation
######Disclaimer: works only on Polish postal codes!

```
$('.FIELD_TO_VALIDATE').validatePostalCode('.FIELD_FOR_CITY_NAME')
```

For example:

```
$('.postalCode').validatePostalCode('.city');
```

####Password validaton

```
$('.FIELD_TO_VALIDATE').validatePassword();
```

For example:

```
$('.password').validatePassword();
```
