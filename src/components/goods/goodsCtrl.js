;(function() {
  "use strict";
  angular
    .module('RDash')
    .controller('goodsController', ['$scope', 'goodsHTTP', function($scope, goodsHTTP) {
      $scope.add = goodsHTTP.add;
      $scope.read = goodsHTTP.read;
      $scope.remove = goodsHTTP.remove;
      $scope.update = goodsHTTP.update;
    }]);
})();