;(function() {
  "use strict";
  angular
    .module('RDash')
    .controller('commpropVariantsController', ['$scope', 'commpropVariantsHTTP', function($scope, commpropVariantsHTTP) {
      
      $scope.onRemove = $scope.onRemove || function onRemoveDummy() { console.error('define an onRemove function'); };
      $scope.editing = false;

      $scope.endEditCommpropVariant = function endEditCommpropVariant() {
        $scope.editing = false;
        commpropVariantsHTTP.update($scope.variant).success(function(response) {
          $scope.variant = response;
        });
      };

      $scope.beginEditCommpropVariant = function beginEditCommpropVariant() {
        $scope.editing = true;
      };

      $scope.removeCommpropVariant = function removeCommpropVariant() {
        commpropVariantsHTTP.remove($scope.variant).success(function(response) {
          $scope.onRemove($scope.variant);
        });
      };

    }]);

})();