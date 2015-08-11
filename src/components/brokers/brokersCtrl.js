;(function() {
  "use strict";
  angular
    .module('RDash')
    .controller('brokersController', ['$scope', 'brokersHTTP', function($scope, brokersHTTP) {
      $scope.add = brokersHTTP.add;
      $scope.read = brokersHTTP.read;
      $scope.update = brokersHTTP.update;
      $scope.remove = brokersHTTP.remove;
    }]);
})();