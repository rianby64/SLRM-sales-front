;(function() {
  "use strict";
  angular
    .module('RDash')
    .controller('commpropExtraController', ['$scope', '$stateParams', 'goodsHTTP', 'commpropGoodsHTTP', function($scope, $stateParams, goodsHTTP, commpropGoodsHTTP) {
      
      $scope.entry = {};
      $scope.refreshGoods = function(provider) {
        goodsHTTP.read().success(function(response) {
          $scope.goods = response;
        });
      };
      
      $scope.onSelectGood = function(item, model) {
        $scope.price = item.price;
        $scope.quantity = 1;
      };
      
      $scope.totalPrice = 0;
      $scope.totalQuantity = 0;
      
      $scope.quantity = 0;
      $scope.price = 0;
      $scope.goodId = 0;
      $scope.commercialProposalId = parseInt($stateParams.id, 10);
      commpropGoodsHTTP.setCommercialProposalId($scope.commercialProposalId);
      
      $scope.entriesGoods = [];
      
      commpropGoodsHTTP.read().success(function(response) {
        $scope.entriesCommpropGoods = response;
        for (var i = 0; i < $scope.entriesCommpropGoods.length; i++) {
          $scope.totalQuantity += $scope.entriesCommpropGoods[i].quantity;
          $scope.totalPrice += $scope.entriesCommpropGoods[i].price * $scope.entriesCommpropGoods[i].quantity;
        }
      });
      
      $scope.onAddCommpropGoods = function() {
        var entry = {
          price: $scope.price,
          quantity: $scope.quantity,
          goodId: $scope.entry.good.id,
          commercialProposalId: $scope.commercialProposalId
        };
        
        commpropGoodsHTTP.add(entry).success(function(response) {
          response.good = {
            name: $scope.entry.good.name
          };
          $scope.entriesCommpropGoods.push(response);
          $scope.entry = {};
          $scope.quantity = 0;
          $scope.price = 0;
          $scope.goodId = 0;
        });
        
      };
      
      $scope.onRemoveCommpropGoods = function(entry) {
        commpropGoodsHTTP.remove(entry).success(function(response) {
          var l = $scope.entriesCommpropGoods.length, i, found = false;
          for (i = 0; i < l; i++) {
            if ($scope.entriesCommpropGoods[i].id === entry.id) {
              found = true;
              break;
            }
          };
          if (found)
            $scope.entriesCommpropGoods.splice(i, 1);
        });
      };
      
    }]);
})();