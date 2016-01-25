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
          
          var form = angular.copy(orderForm);
          if (form.commercial_proposal_variant) {
            if (form.commercial_proposal_variant.id) {
              form.commercialProposalVariantId = orderForm.commercial_proposal_variant.id;
            }
          }
          
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
