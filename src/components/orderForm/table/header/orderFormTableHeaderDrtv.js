;(function() {
  "use strict";
  
  angular
    .module('RDash')
    .directive('orderFormTableHeader', function() {
      return {
        replace: true,
        restrict: 'A',
        scope: { },
        templateUrl: 'components/orderForm/table/header/orderFormTableHeaderTmpl.html'        
      };
    });
  
})();
