;(function() {
  "use strict";
  
  angular
    .module('SLRM')
    .directive('logout', function() {
      return {
        restrict: 'A',
        controller: 'logoutController',
        templateUrl: 'shared/user/logout/logoutTmpl.html'        
      };
    });
  
})();