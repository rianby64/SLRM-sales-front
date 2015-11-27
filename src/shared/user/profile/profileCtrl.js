;(function() {
  "use strict";

  angular
    .module('RDash')
    .controller('profileController', ['$scope', 'authService', 'profileFormValidator', 'adminHTTP', profileController]);

  function profileController($scope, authService, profileFormValidator, adminHTTP) {
    authService.check().then(function(user) {
      $scope.user = user;
    });

    $scope.user = {};

    $scope.submit = function(user) {
      adminHTTP
        .update(user)
        .success(function(response) {
          $scope.user = response;
        })
        .error(function(response) {
          $scope.error(response);
        })
    };

    $scope.error = function(user) {
      console.log('error', user);
    };

    $scope.onSubmit = function() {
      profileFormValidator.validate($scope.user)
        .then($scope.submit, $scope.error);
    };
  }

})();
