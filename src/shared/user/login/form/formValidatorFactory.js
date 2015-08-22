;(function() {
  "use strict";
  
  angular
    .module('RDash')
    .factory('loginFormValidator', [
    '$q',
    function($q) {
      var formValidator = {};
      
      function isValidEmail(value) {
        return /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test('' + value);
      }
      
      function validate(credentials) {
        return $q(function(resolve, reject) {
          var reason = {
            valid: true
          };
          
          if (!isValidEmail(credentials.user)) {
            reason.valid = false;
            reason.user = ['incorrect e-mail'];
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