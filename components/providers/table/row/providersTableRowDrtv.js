;(function() {
  "use strict";
  
  angular
    .module('SLRM')
    .directive('providersTableRow', function() {
      return {
        replace: true,
        restrict: 'A',
        scope: {
          entity: '=',
          onRemove: '=',
          base: '='
        },
        templateUrl: 'components/providers/table/row/providersTableRowTmpl.html'        
      };
    });
  
})();