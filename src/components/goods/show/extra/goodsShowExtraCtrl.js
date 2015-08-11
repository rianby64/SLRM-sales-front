;(function() {
  "use strict";
  angular
    .module('RDash')
    .controller('goodsShowExtraController', ['$scope', '$stateParams', 'providersHTTP', 'goodsProvidersHTTP', function($scope, $stateParams, providersHTTP, goodsProvidersHTTP) {
      
      $scope.entry = {};
      $scope.refreshProviders = function(provider) {
        providersHTTP.read().success(function(response) {
          $scope.providers = response;
        });
      };
      
      $scope.price = 0;
      $scope.providerId = 0;
      $scope.goodId = parseInt($stateParams.id, 10);
      goodsProvidersHTTP.setGoodId($scope.goodId);
      
      $scope.entries = [];
      
      goodsProvidersHTTP.read().success(function(response) {
        $scope.entries = response;
      });
      
      $scope.onAdd = function() {
        var entry = {
          price: $scope.price,
          providerId: $scope.entry.provider.id,
          goodId: $scope.goodId
        };
        
        goodsProvidersHTTP.add(entry).success(function(response) {
          response.provider = {
            legal_name: $scope.entry.provider.legal_name
          };
          $scope.entries.push(response);
          $scope.entry = {};
          $scope.price = 0;
        });
        
      };
      
      $scope.onRemove = function(entry) {
        goodsProvidersHTTP.remove(entry).success(function(response) {
          var l = $scope.entries.length, i, found = false;
          for (i = 0; i < l; i++) {
            if ($scope.entries[i].id === entry.id) {
              found = true;
              break;
            }
          };
          if (found)
            $scope.entries.splice(i, 1);
        });
      };
      
    }]);
})();