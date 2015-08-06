;(function() {
  "use strict";
  
  angular
    .module('SLRM')
    .controller('logoutController', ['$scope', 'authService', function($scope, authService) {
      $scope.logout = authService.logout;
    }]);
  
})();