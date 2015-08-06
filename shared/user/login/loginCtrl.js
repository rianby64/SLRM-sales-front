;(function () {
  "use strict";
  
  angular
    .module('SLRM')
    .controller('loginController', [
      '$scope',
      'authService',
    function ($scope, authService) {
      $scope.validForm = function validForm(credentials) {
        var text = "submitting";
        $scope.message(text); // show that we're submitting
        
        authService
          .login(credentials)
          .then(loginSuccess, $scope.error);
      }

      function loginSuccess(credentials) {
        $scope.message(); // clear submitting message
      }
      
    }]);
  
})();