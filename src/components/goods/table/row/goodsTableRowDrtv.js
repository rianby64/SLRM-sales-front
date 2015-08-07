;(function() {
  "use strict";
  
  angular
    .module('RDash')
    .directive('goodsTableRow', function() {
      return {
        replace: true,
        restrict: 'A',
        scope: {
          entity: '=',
          onRemove: '=',
          base: '='
        },
        templateUrl: 'components/goods/table/row/goodsTableRowTmpl.html'        
      };
    });
  
})();