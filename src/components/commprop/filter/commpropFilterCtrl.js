;(function() {
  "use strict";
  angular
    .module('RDash')
    .controller('commpropFilterController', ['$scope', function($scope) {
      
      $scope.noFilter = function noFilter() {
        var criteria = undefined;
        $scope.searchManager.load(criteria);
      };
      
      $scope.filterByOk = function filterByOk() {
        var criteria = { status: 'ok' };
        $scope.searchManager.load(criteria);
      };
      
      $scope.filterByOpen = function filterByOpen() {
        var criteria = { status: 'open' };
        $scope.searchManager.load(criteria);
      };
      
      $scope.filterByCancel = function filterByCancel() {
        var criteria = { status: 'cancel' };
        $scope.searchManager.load(criteria);
      };
    }]);
})();