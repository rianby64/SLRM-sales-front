;(function() {
  "use strict";
  
  angular
    .module('RDash')
    .directive('orderFormTableRow', function() {
      return {
        replace: true,
        restrict: 'A',
        scope: {
          entity: '=',
          onRemove: '=',
          base: '='
        },
        templateUrl: 'components/orderForm/table/row/orderFormTableRowTmpl.html'        
      };
    });
  
})();
