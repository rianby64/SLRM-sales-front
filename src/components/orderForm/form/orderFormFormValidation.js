;(function() {
  "use strict";
  
  angular
    .module('RDash')
    .factory('orderFormFormValidator', [
    '$q',
    function($q) {
      var formValidator = {};
      
      function validate(orderForm) {
        
        
        return $q(function(resolve, reject) {
          var reason = {
            valid: true
          };
          
          
          if (reason.valid) {
            resolve(orderForm);
          }
          reject(reason);
        });
      };
      
      formValidator.validate = validate;
      return formValidator;
    }]);
  
})();
