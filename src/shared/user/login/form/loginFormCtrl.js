;(function () {
  "use strict";

  angular
    .module('RDash')
    .controller('loginFormController', [
      '$scope',
      'loginFormValidator',
    function ($scope, formValidator) {

      $scope.submit = $scope.submit || function() { console.error('loginFormController>>submit empty'); };
      $scope.error = $scope.error || function() { console.error('loginFormController>>error empty'); };

      $scope.user = $scope.user || '';

      $scope.onSubmit = function() {
        var credentials = {
          user: $scope.user
        };

        formValidator
          .validate(credentials)
          .then($scope.submit, $scope.error);
      };
    }]);

})();
