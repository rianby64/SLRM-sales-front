;(function() {
  "use strict";
  angular
    .module('RDash')
    .controller('commpropController', ['$scope', 'commpropHTTP', function($scope, commpropHTTP) {
      $scope.add = commpropHTTP.add;
      $scope.read = commpropHTTP.read;
      $scope.remove = commpropHTTP.remove;
      $scope.update = commpropHTTP.update;
    }]);
})();