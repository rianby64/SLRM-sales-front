;(function() {
  "use strict";
  
  angular
    .module('RDash')
    .factory('providersFormValidator', [
    '$q',
    function($q) {
      var formValidator = {};
      
      function validate(type, provider) {
        
        return $q(function(resolve, reject) {
          var reason = {
            valid: true
          };
          
          if (reason.valid) {
            var newProvider = angular.copy(provider);
            newProvider.type = type;
            resolve(newProvider);
          }
          reject(reason);
        });
      };
      
      formValidator.validate = validate;
      return formValidator;
    }]);
  
})();