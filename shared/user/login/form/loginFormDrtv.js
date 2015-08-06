;(function() {
  "use strict";
  
  angular
    .module('SLRM')
    .directive('loginForm', function() {
      return {
        restrict: 'E',
        scope: {
          error: '=',
          submit: '='
        },
        controller: 'loginFormController',
        templateUrl: 'shared/user/login/form/loginFormTmpl.html'        
      };
    });
  
})();