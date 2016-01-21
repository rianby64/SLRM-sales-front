;(function() {
  "use strict";
  angular
    .module('RDash')
    .controller('orderFormController', ['$scope', 'orderFormHTTP', function($scope, orderFormHTTP) {
      $scope.add = orderFormHTTP.add;
      $scope.read = orderFormHTTP.read;
      $scope.remove = orderFormHTTP.remove;
      $scope.update = orderFormHTTP.update;
    }]);
})();
