;(function () {
  "use strict";
  
  angular
    .module('SLRM')
    .controller('entityDetailController', ['$scope', function($scope) {
      
      $scope.entity = $scope.entity || {};
      $scope.cancel = $scope.cancel || function() { };
      
      $scope.onCancel = function() {
        $scope.cancel();
      };
    
    }
  ]);
  
})();