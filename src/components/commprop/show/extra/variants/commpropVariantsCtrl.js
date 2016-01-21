;(function() {
  "use strict";
  angular
    .module('RDash')
    .controller('commpropVariantsController', ['$scope', 'commpropVariantsHTTP', function($scope, commpropVariantsHTTP) {
      
      $scope.beginEditCommpropVariants = function beginEditCommpropVariants() {
        console.log('beginEditCommpropVariants');
      };
      
      $scope.onRemoveCommpropVariants = function onRemoveCommpropVariants() {
        console.log('onRemoveCommpropVariants');
      };
      
    }]);
  
})();