;(function() {
  "use strict";

  angular
    .module('RDash')
    .controller('adminController', ['$scope', 'authService', 'adminHTTP', function($scope, authService, adminHTTP) {
      authService.check();

      $scope.add = adminHTTP.add;
      $scope.read = adminHTTP.read;
      $scope.update = adminHTTP.update;
      $scope.remove = adminHTTP.remove;

    }]);

})();
