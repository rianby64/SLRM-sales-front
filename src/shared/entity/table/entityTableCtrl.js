;(function () {
  "use strict";

  angular
    .module('RDash')
    .controller('entityTableController', ['$scope', 'entityManager', function($scope, entityManager) {
      $scope.onRemove = entityManager.remove;
      $scope.searchManager = entityManager;
    }
  ]);

})();
