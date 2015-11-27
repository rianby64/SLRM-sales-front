;(function() {
  "use strict";
  angular
    .module('RDash')
    .controller('commpropShowController', ['$scope', 'commpropFormValidator', 'commpropHTTP', commpropShowController]);

  function commpropShowController($scope, commpropFormValidator, commpropHTTP) {
    $scope.submit = function(value) {
      commpropHTTP.update(value)
      .then($scope.onCancel(), $scope.error);
    };

    $scope.onSubmit = function(entity) {
      commpropFormValidator.validate(entity)
        .then($scope.submit, $scope.error);
    };

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
  }
})();
