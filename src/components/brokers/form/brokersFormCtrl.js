;(function() {
  "use strict";
  angular
    .module('RDash')
    .controller('brokersFromController', ['$scope', function($scope) {
      $scope.naturalPerson = $scope.naturalPerson || true;
      $scope.legalPerson = $scope.legalPerson || false;
      
      $scope.$watch('entity.type', function(type) {
        if (type === 'natural') {
          $scope.naturalPerson = true;
          $scope.legalPerson = false;
        }
        if (type === 'legal') {
          $scope.naturalPerson = false;
          $scope.legalPerson = true;
        }
      });
    }]);
})();