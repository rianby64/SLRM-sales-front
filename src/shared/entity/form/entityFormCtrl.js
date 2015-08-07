;(function () {
  "use strict";
  
  angular
    .module('RDash')
    .controller('entityFormController', ['$scope', function($scope) {
      
      $scope.entity = $scope.entity || {};
      $scope.submit = $scope.submit || function() { console.error('entityFormController>>submit empty'); };
      $scope.cancel = $scope.cancel || function() { console.error('entityFormController>>cancel empty'); };
      $scope.error = $scope.error || function() { console.error('entityFormController>>error empty'); };
      
      $scope.action = $scope.action || "";
      $scope.textSubmit = "Отправить";

      if ($scope.action === "create") {
        $scope.textSubmit = "Создать";
      }
      else if ($scope.action === "update") {
        $scope.textSubmit = "Обновить";
      }
      
      $scope.onSubmit = function() {
        $scope.validate($scope.entity)
          .then($scope.submit, $scope.error);
      };
      
      $scope.onCancel = function() {
        $scope.cancel();
      };
    
    }
  ]);
  
})();