;(function() {
  "use strict";
  
  angular
    .module('RDash')
    .controller('restoreController', ['$scope', '$state', 'authService', function($scope, $state, authService) {
      $scope.requestToken = authService.requestToken;
      
      $scope.onRequestToken = function() {
        var credentials = {
          user: $scope.user
        };
        
        $scope.requestToken(credentials);
      };
      
//      if (authService.hasToken()) {
//        console.log('why you want to restore password if you are in?');
//        $state.go('main');
//      }
    }]);
  
})();