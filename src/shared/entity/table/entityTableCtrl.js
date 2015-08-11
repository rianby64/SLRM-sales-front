;(function () {
  "use strict";
  
  angular
    .module('RDash')
    .controller('entityTableController', ['$scope', 'entityManager', function($scope, entityManager) {
      $scope.normalTheme = true;
      if ($scope.theme === "light") {
        $scope.normalTheme = false;
      }
      $scope.onRemove = entityManager.remove;
    }
  ]);
  
})();