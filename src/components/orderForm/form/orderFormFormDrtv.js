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
        templateUrl: 'components/orderForm/form/orderFormFormTmpl.html'
      };
    });
  
})();
