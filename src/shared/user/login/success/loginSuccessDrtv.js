;(function() {
  "use strict";
  
  angular
    .module('RDash')
    .directive('loginSuccess', function() {
      return {
        restrict: 'E',
        scope: {
        },
        controller: 'loginSuccessController',
        templateUrl: 'shared/user/login/success/loginSuccessTmpl.html'        
      };
    });
  
})();