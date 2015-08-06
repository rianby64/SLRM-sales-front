;(function() {
  "use strict";
  
  angular
    .module('SLRM')
    .directive('login', function() {
      return {
        restrict: 'E',
        scope: {
          restoreSref: '@'
        },
        controller: 'loginController',
        templateUrl: 'shared/user/login/loginTmpl.html'        
      };
    });
  
})();