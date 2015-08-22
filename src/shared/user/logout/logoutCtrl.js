;(function() {
  "use strict";
  
  angular
    .module('RDash')
    .controller('logoutController', ['$scope', 'authService', function($scope, authService) {
      $scope.logout = authService.logout || function() {
        console.error('logoutController >> undefined logout function');
      };
    }]);
  
})();