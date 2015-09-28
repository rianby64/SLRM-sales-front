;(function() {
  "use strict";
  angular
    .module('RDash')
    .controller('commpropExtraController', ['$scope', '$stateParams', 'goodsHTTP', 'commpropGoodsHTTP', function($scope, $stateParams, goodsHTTP, commpropGoodsHTTP) {
      
      $scope.entry = {};
      $scope.currencyTypes = [{ type: 'RUB', text: 'RUB' },{ type: 'EUR', text: 'EUR' },{ type: 'USD', text: 'USD' }];
      $scope.refreshGoods = function(provider) {
        goodsHTTP.read().success(function(response) {
          $scope.goods = response;
        });
      };
      
      $scope.onSelectGood = function(item, model) {
        $scope.entry.goodId = item.id;
        $scope.entry.currency = item.currency;
        $scope.entry.price = item.price;
        $scope.entry.quantity = 1;
      };
      
      $scope.totalPrice = 0;
      $scope.totalQuantity = 0;
      
      $scope.entry.quantity = 0;
      $scope.entry.price = 0;
      $scope.entry.currency = '';
      $scope.entry.delivery_date = '';
      $scope.entry.goodId = 0;
      $scope.entry.commercialProposalId = parseInt($stateParams.id, 10);
      commpropGoodsHTTP.setCommercialProposalId($scope.entry.commercialProposalId);
      
      $scope.entriesGoods = [];
      
      commpropGoodsHTTP.read().success(function(response) {
        $scope.entriesCommpropGoods = response;
        for (var i = 0; i < $scope.entriesCommpropGoods.length; i++) {
          $scope.totalQuantity += $scope.entriesCommpropGoods[i].quantity;
          $scope.totalPrice += $scope.entriesCommpropGoods[i].price * $scope.entriesCommpropGoods[i].quantity;
        }
      });
      
      $scope.onAddCommpropGoods = function() {
        commpropGoodsHTTP.add($scope.entry).success(function(response) {
          response.good = {
            name: $scope.entry.good.name
          };
          $scope.entriesCommpropGoods.push(response);
          $scope.entry.quantity = 0;
          $scope.entry.price = 0;
          $scope.entry.goodId = 0;
          $scope.entry.currency = '';
          $scope.entry.delivery_date = '';
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