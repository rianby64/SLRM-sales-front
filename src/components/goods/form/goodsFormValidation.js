;(function() {
  "use strict";
  
  angular
    .module('RDash')
    .factory('goodsFormValidator', [
    '$q',
    function($q) {
      var formValidator = {};
      
      function validate(good) {
        
        return $q(function(resolve, reject) {
          var reason = {
            valid: true
          };
          
          if (good.price < 0) {
            reason.valid = false;
            reason.price = ['price is negative'];
          }
          
          if (reason.valid) {
            var form = angular.copy(good);
            
            delete form.category;
            delete form.provider;
            
            form.categoryId = good.category.id;
            form.providerId = good.provider.id;
            resolve(form);
          }
          reject(reason);
        });
      };
      
      formValidator.validate = validate;
      return formValidator;
    }]);
  
})();