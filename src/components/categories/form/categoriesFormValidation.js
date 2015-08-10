;(function() {
  "use strict";
  
  angular
    .module('RDash')
    .factory('categoriesFormValidator', [
    '$q',
    function($q) {
      var formValidator = {};
      
      function validate(categories) {
        
        
        return $q(function(resolve, reject) {
          var reason = {
            valid: true
          };
          
          
          if (reason.valid) {
            resolve(categories);
          }
          reject(reason);
        });
      };
      
      formValidator.validate = validate;
      return formValidator;
    }]);
  
})();