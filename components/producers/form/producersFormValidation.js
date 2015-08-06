;(function() {
  "use strict";
  
  angular
    .module('SLRM')
    .factory('producersFormValidator', [
    '$q',
    function($q) {
      var formValidator = {};
      
      function validate(client) {
        
        return $q(function(resolve, reject) {
          var reason = {
            valid: true
          };
          
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