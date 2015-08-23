;(function() {
  "use strict";
  
  angular
    .module('RDash')
    .directive('admin', function() {
      return {
        restrict: 'E',
        scope: {
          
        },
        controller: 'adminController',
        templateUrl: 'shared/user/admin/adminTmpl.html'        
      };
    });
  
})();