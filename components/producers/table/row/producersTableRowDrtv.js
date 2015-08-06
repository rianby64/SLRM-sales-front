;(function() {
  "use strict";
  
  angular
    .module('SLRM')
    .directive('producersTableRow', function() {
      return {
        replace: true,
        restrict: 'A',
        scope: {
          entity: '=',
          onRemove: '=',
          base: '='
        },
        templateUrl: 'components/producers/table/row/producersTableRowTmpl.html'        
      };
    });
  
})();