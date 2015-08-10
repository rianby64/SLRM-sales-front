;(function() {
  "use strict";
  angular
    .module('RDash')
    .controller('providersController', ['$scope', 'providersHTTP', function($scope, providersHTTP) {
      $scope.add = providersHTTP.add;
      $scope.read = providersHTTP.read;
      $scope.remove = providersHTTP.remove;
      $scope.update = providersHTTP.update;
    }]);
})();