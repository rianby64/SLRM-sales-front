;(function() {
  "use strict";
  angular
    .module('RDash')
    .controller('commpropShowController', ['$scope', 'commpropHTTP', function($scope, commpropHTTP) {
      
      $scope.checkStatus = function() {
        return $scope.entity.status === 'ok';
      };
      
      $scope.onUpdate = function(entity) {
        $scope.updateMessage = "запрос обрабатывается...";
        commpropHTTP.update(entity).then(function(response) {
          $scope.entity = response.data;
          $scope.updateMessage = "Готово!";
        });
      };
    }]);
})();