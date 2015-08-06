;(function () {
  "use strict";
  
  angular
    .module('SLRM')
    .controller('entityTableController', ['$scope', 'entityManager', function($scope, entityManager) {
      $scope.onRemove = entityManager.remove;
    }
  ]);
  
})();