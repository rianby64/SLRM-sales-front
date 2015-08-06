;(function() {
  "use strict";
  
  angular
    .module('SLRM')
    .factory('loginFormValidator', [
    '$q',
    function($q) {
      var formValidator = {};
      
      function isValidEmail(value) {
        var emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        return emailRegex.test("" + value);
      }
      function isValidPassword(value) {
        return (("" + value).length > 2);
      }
      
      function validate(credentials) {
        return $q(function(resolve, reject) {
          var reason = {
            valid: true
          };
          
          if (!isValidEmail(credentials.username)) {
            reason.valid = false;
            reason.username = ['incorrect e-mail'];
            
          }
          if (!isValidPassword(credentials.password)) {
            reason.valid = false;
            reason.password = ['incorrect password'];
          }
          
          if (reason.valid) {
            resolve(credentials);
          }
          reject(reason);
        });
      };
      
      formValidator.validate = validate;
      return formValidator;
    }]);
  
})();