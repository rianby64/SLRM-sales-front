;(function() {
  "use strict";

  angular
    .module('RDash')
    .directive('adminForm', function() {
      return {
        restrict: 'E',
        scope: {
          entity: '='
        },
        templateUrl: 'shared/user/admin/form/adminFormTmpl.html'
      };
    });

})();
