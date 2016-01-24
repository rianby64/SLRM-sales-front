;(function() {
  "use strict";
  angular
    .module('RDash')
    .controller('orderFormController', ['$scope', 'orderFormHTTP', function($scope, orderFormHTTP) {
      $scope.read = orderFormHTTP.read;
      $scope.update = orderFormHTTP.update;
    }]);
})();
