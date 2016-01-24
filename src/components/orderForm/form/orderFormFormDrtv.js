;(function() {
  "use strict";
  
  angular
    .module('RDash')
    .directive('orderFormForm', function() {
      return {
        restrict: 'E',
        scope: { 
          entity: '='
        },
        controller: 'orderFormFormController',
        templateUrl: 'components/orderForm/form/orderFormFormTmpl.html'
      };
    });
  
})();
