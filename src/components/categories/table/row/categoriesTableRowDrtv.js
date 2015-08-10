;(function() {
  "use strict";
  
  angular
    .module('RDash')
    .directive('categoriesTableRow', function() {
      return {
        replace: true,
        restrict: 'A',
        scope: {
          entity: '=',
          onRemove: '=',
          base: '='
        },
        templateUrl: 'components/categories/table/row/categoriesTableRowTmpl.html'        
      };
    });
  
})();