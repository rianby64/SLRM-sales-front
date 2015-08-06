;(function () {
  "use strict";
  
  angular
    .module('SLRM')
    .controller('loginFormController', [
      '$scope',
      'loginFormValidator',
    function ($scope, formValidator) {
      
      $scope.submit = $scope.submit || function() { console.error('loginFormController>>submit empty'); };
      $scope.error = $scope.error || function() { console.error('loginFormController>>error empty'); };
      
      $scope.username = $scope.username || '';
      $scope.password = $scope.password || '';
      
      $scope.onSubmit = function() {
        var credentials = {
          username: $scope.username,
          password: $scope.password
        };
        
        formValidator
          .validate(credentials)
          .then($scope.submit, $scope.error);
      };
    }]);
  
})();