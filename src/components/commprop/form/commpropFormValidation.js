;(function() {
  "use strict";
  
  angular
    .module('RDash')
    .factory('commpropFormValidator', [
    '$q',
    function($q) {
      var formValidator = {};
      
      function validate(commprop) {
        
        
        return $q(function(resolve, reject) {
          var reason = {
            valid: true
          };
          
          
          var form = angular.copy(commprop);

          delete form.client;
          delete form.broker;

          form.clientId = commprop.client.id;
          form.brokerId = commprop.broker.id;

          if (reason.valid) {
            resolve(form);
          }
          reject(reason);
        });
      };
      
      formValidator.validate = validate;
      return formValidator;
    }]);
  
})();