;(function() {
  "use strict";
  
  angular
    .module('SLRM')
    .directive('clientsTableRow', function() {
      return {
        replace: true,
        restrict: 'A',
        scope: {
          entity: '=',
          onRemove: '=',
          base: '='
        },
        templateUrl: 'components/clients/table/row/clientsTableRowTmpl.html'        
      };
    });
  
})();