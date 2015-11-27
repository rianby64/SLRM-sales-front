;(function() {
  "use strict";
  angular
    .module('RDash')
    .controller('brokersFromController', ['$scope', function($scope) {
      $scope.entity = $scope.entity || {};
      $scope.entity.type = $scope.entity.type || "natural";
      $scope.naturalPerson = $scope.naturalPerson || true;
      $scope.legalPerson = $scope.legalPerson || false;
      $scope.personTypes = [
        {
          type: 'natural',
          text: 'Физ-лицо'
        },
        {
          type: 'legal',
          text: 'Юр-лицо'
        }
      ];

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
