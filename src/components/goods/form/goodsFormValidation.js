;(function() {
  "use strict";
  
  angular
    .module('RDash')
    .factory('goodsFormValidator', [
    '$q',
    function($q) {
      var formValidator = {};
      
      function validate(client) {
        
        return $q(function(resolve, reject) {
          var reason = {
            valid: true
          };
          
          if (client.price < 0) {
            reason.valid = false;
            reason.price = ['price is negative'];
          }
          
          if (reason.valid) {
            var form = angular.copy(client);
            
            delete form.category;
            
            form.categoryId = client.category.id;
            resolve(form);
          }
          reject(reason);
        });
      };
      
      formValidator.validate = validate;
      return formValidator;
    }]);
  
})();