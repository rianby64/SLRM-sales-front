;(function() {
  "use strict";
  
  angular
    .module('SLRM')
    .controller('headerController', ['$scope', 'authService', function($scope, authService) {
      $scope.showMenu = authService.hasToken();
      
      function notifyLogin() {
        $scope.showMenu = true;
      }
      
      function notifyLogout() {
        $scope.showMenu = false;
      }
      
      authService.onLogin(notifyLogin);
      authService.onLogout(notifyLogout);
    }]);
  
})();