;(function() {
  "use strict";
  angular
    .module('RDash')
    .controller('searchController', ['$scope', searchController]);

  function searchController($scope) {
    $scope.text = "";
    $scope.onChange = function onChange(text) {
      $scope.manager.load({ search: text });
    };
  }
})();
