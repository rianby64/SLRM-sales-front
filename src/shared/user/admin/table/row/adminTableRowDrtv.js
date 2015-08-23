;(function() {
  "use strict";
  
  angular
    .module('RDash')
    .directive('adminTableRow', function() {
      return {
        replace: true,
        restrict: 'A',
        scope: {
          entity: '=',
          onRemove: '=',
          base: '='
        },
        templateUrl: 'shared/user/admin/table/row/adminTableRowTmpl.html'        
      };
    });
  
})();