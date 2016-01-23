;(function() {
  "use strict";
  angular
    .module('RDash')
    .controller('commpropExtraController', [
      '$scope',
      '$stateParams',
      'commpropVariantsHTTP',
      commpropExtraCtrl
    ]);

  function commpropExtraCtrl($scope, $stateParams, commpropVariantsHTTP) {
    $scope.variants = [];
    commpropVariantsHTTP.setCommercialProposalId($stateParams.id);
    commpropVariantsHTTP.read().success(function(response) {
      $scope.variants = response;
    });

    $scope.onAddCommpropVariants = function onAddCommpropVariants() {
      var item = {
        commercialProposalId: $stateParams.id,
        name: $scope.variants.length + 1
      };
      commpropVariantsHTTP.add(item).success(function(response) {
        $scope.variants.push(response);
      });
    };

    $scope.onRemoveCompropVariants = function onRemoveCompropVariants(variant) {
      var i,
          l = $scope.variants.length,
          found = false;

      for (i = 0; i < l; i++) {
        if ($scope.variants[i].id === variant.id) {
          found = true;
          break;
        }
      }

      if (found) {
        $scope.variants.splice(i, 1);
      }
    };

  }
})();
