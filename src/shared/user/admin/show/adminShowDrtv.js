;(function() {
  "use strict";

  angular
    .module('RDash')
    .directive('adminShow', function() {
      return {
        restrict: 'A',
        scope: {
          entity: '=',
          onCancel: '='
        },
        templateUrl: 'shared/user/admin/show/adminShowTmpl.html'
      };
    });

})();
