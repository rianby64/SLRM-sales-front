;(function() {
  "use strict";
  
  angular
    .module('SLRM')
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