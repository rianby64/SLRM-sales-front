;(function() {
  "use strict";
  
  angular
    .module('RDash')
    .directive('brokersTableRow', function() {
      return {
        replace: true,
        restrict: 'A',
        scope: {
          entity: '=',
          onRemove: '=',
          base: '='
        },
        templateUrl: 'components/brokers/table/row/brokersTableRowTmpl.html'        
      };
    });
  
})();