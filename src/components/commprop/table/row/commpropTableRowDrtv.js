;(function() {
  "use strict";
  
  angular
    .module('RDash')
    .directive('commpropTableRow', function() {
      return {
        replace: true,
        restrict: 'A',
        scope: {
          entity: '=',
          onRemove: '=',
          base: '='
        },
        templateUrl: 'components/commprop/table/row/commpropTableRowTmpl.html'        
      };
    });
  
})();