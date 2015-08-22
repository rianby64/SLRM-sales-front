;(function () {
  "use strict";
  
  angular
    .module('RDash')
    .controller('loginController', [
      '$scope',
      'authService',
      loginController
    ]);
  
  function loginController($scope, authService) {
    $scope.submitted = false;
    
    $scope.validForm = function validForm(credentials) {
      var text = "submitting";
      $scope.message(text); // show that we're submitting

      authService
        .requestToken(credentials)
        .then(loginSuccess, $scope.error);
    }

    function loginSuccess(credentials) {
      $scope.submitted = true;
      $scope.message("success"); // clear submitting message
    }

  }
  
})();