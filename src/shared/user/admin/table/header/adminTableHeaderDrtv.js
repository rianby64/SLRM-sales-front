;(function() {
  "use strict";

  angular
    .module('RDash')
    .directive('adminTableHeader', function() {
      return {
        replace: true,
        restrict: 'A',
        scope: { },
        templateUrl: 'shared/user/admin/table/header/adminTableHeaderTmpl.html'
      };
    });

})();
