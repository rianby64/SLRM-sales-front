;(function() {
  "use strict";
  angular
    .module('RDash')
    .controller('clientsController', ['$scope', 'clientsHTTP', function($scope, clientsHTTP) {
      $scope.add = clientsHTTP.add;
      $scope.read = clientsHTTP.read;
      $scope.remove = clientsHTTP.remove;
      $scope.update = clientsHTTP.update;
    }]);
})();