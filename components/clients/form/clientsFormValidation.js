;(function() {
  "use strict";
  
  angular
    .module('SLRM')
    .factory('clientsFormValidator', [
    '$q',
    function($q) {
      var formValidator = {};
      
      function validate(client) {
        
        function isValidEmail(value) {
          var emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
          return emailRegex.test("" + value);
        }
        
        return $q(function(resolve, reject) {
          var reason = {
            valid: true
          };
          
          if (!isValidEmail(client.email)) {
            reason.valid = false;
            reason.email = ['incorrect e-mail'];
            
          }
          
          if (reason.valid) {
            resolve(client);
          }
          reject(reason);
        });
      };
      
      formValidator.validate = validate;
      return formValidator;
    }]);
  
})();