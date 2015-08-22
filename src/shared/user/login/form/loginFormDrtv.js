;(function() {
  "use strict";
  
  angular
    .module('RDash')
    .directive('loginForm', function() {
      return {
        restrict: 'E',
        scope: {
          error: '=',
          submit: '=',
          submitted: '='
        },
        controller: 'loginFormController',
        templateUrl: 'shared/user/login/form/loginFormTmpl.html'        
      };
    });
  
})();