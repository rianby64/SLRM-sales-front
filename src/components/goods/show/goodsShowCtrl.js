;(function() {
  'use strict'
  angular
    .module('RDash')
    .controller('goodsShowController', ['$scope', 'goodsFormValidator', 'goodsHTTP', goodsShowController]);

  function goodsShowController($scope, goodsFormValidator, goodsHTTP) {
    $scope.submit = function(value) {
      goodsHTTP.update(value)
      .then($scope.onCancel(), $scope.error);
    };

    $scope.onSubmit = function(entity) {
      goodsFormValidator.validate(entity)
        .then($scope.submit, $scope.error);
    };
  }
})();
