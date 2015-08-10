;(function() {
  "use strict";
  angular
    .module('RDash')
    .controller('categoriesController', ['$scope', 'categoriesHTTP', function($scope, categoriesHTTP) {
      $scope.add = categoriesHTTP.add;
      $scope.read = categoriesHTTP.read;
      $scope.remove = categoriesHTTP.remove;
      $scope.update = categoriesHTTP.update;
    }]);
})();