;(function() {
  "use strict";
  
  angular
    .module('RDash')
    .directive('restore', function() {
      return {
        restrict: 'E',
        scope: {
          
        },
        controller: 'restoreController',
        templateUrl: 'shared/user/restore/restoreTmpl.html'        
      };
    });
  
})();