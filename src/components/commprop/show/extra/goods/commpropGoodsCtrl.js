;(function() {
  "use strict";
  angular
    .module('RDash')
    .controller('commpropGoodsController', [
      '$scope',
      'commpropGoodsHTTP',
      'goodsHTTP',
      commpropGoodsController
    ]);
  
  function commpropGoodsController($scope, commpropGoodsHTTP, goodsHTTP) {
    var variantId = parseInt($scope.variant.id, 10);
    $scope.goods = [];
    $scope.entriesCommpropGoods = [];
    $scope.currencyTypes = [{ type: 'RUB', text: 'руб' },{ type: 'EUR', text: '€' },{ type: 'USD', text: '$' }];
    
    $scope.refreshGoods = function(goods) {
      var criteria;
      if (goods) {
        criteria = {
          search: goods
        };
      }
      goodsHTTP.read(criteria).success(function(response) {
        $scope.goods = response;
      });
    };

    $scope.onSelectGood = function onSelectGood(item, model) {
      $scope.entry.goodId = item.id;
      $scope.entry.currency = item.currency;
      $scope.entry.price = item.price;
      $scope.entry.quantity = 1;
      $scope.entry.delivery_period = '10 дней';
      $scope.entry.commercialProposalVariantId = variantId;
    };
    
    $scope.totalPriceRUB = 0;
    $scope.totalPriceUSD = 0;
    $scope.totalPriceEUR = 0;
    $scope.totalQuantity = 0;

    $scope.entry = {};
    $scope.entry.quantity = 0;
    $scope.entry.price = 0;
    $scope.entry.currency = '';
    $scope.entry.delivery_period = '10 дней';
    $scope.entry.goodId = 0;
    $scope.entry.commercialProposalVariantId = variantId;

    $scope.entriesGoods = [];
    commpropGoodsHTTP.setCommercialProposalVariantsId(variantId);
    commpropGoodsHTTP.read().success(function(response) {
      $scope.entriesCommpropGoods = response;
      $scope.updateTotals();
    });

    $scope.onAddCommpropGoods = function() {
      commpropGoodsHTTP.setCommercialProposalVariantsId(variantId);
      commpropGoodsHTTP.add($scope.entry).success(function(response) {
        response.good = {
          name: $scope.entry.good.name
        };
        $scope.entriesCommpropGoods.push(response);
        $scope.entry = {};
        $scope.entry.commercialProposalId = variantId;
        commpropGoodsHTTP.setCommercialProposalVariantsId(variantId);
        $scope.updateTotals();
      });

    };

    $scope.onRemoveCommpropGoods = function(entry) {
      commpropGoodsHTTP.setCommercialProposalVariantsId(variantId);
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
          $scope.updateTotals();
      });
    };

    $scope.updateTotals = function() {

      $scope.totalPriceRUB = 0;
      $scope.totalPriceUSD = 0;
      $scope.totalPriceEUR = 0;
      $scope.totalQuantity = 0;

      for (var i = 0; i < $scope.entriesCommpropGoods.length; i++) {
        $scope.totalQuantity += $scope.entriesCommpropGoods[i].quantity;

        if ($scope.entriesCommpropGoods[i].currency === "RUB") {
          $scope.totalPriceRUB += $scope.entriesCommpropGoods[i].price * $scope.entriesCommpropGoods[i].quantity;
        }
        if ($scope.entriesCommpropGoods[i].currency === "USD") {
          $scope.totalPriceUSD += $scope.entriesCommpropGoods[i].price * $scope.entriesCommpropGoods[i].quantity;
        }
        if ($scope.entriesCommpropGoods[i].currency === "EUR") {
          $scope.totalPriceEUR += $scope.entriesCommpropGoods[i].price * $scope.entriesCommpropGoods[i].quantity;
        }

      }
    };

    $scope.beginEditCommpropGoods = function(entry) {
      entry.redacting = true;
    }
    $scope.endEditCommpropGoods = function(entry) {
      entry.redacting = false;
      commpropGoodsHTTP.setCommercialProposalVariantsId(entry.commercialProposalId);
      commpropGoodsHTTP.update(entry).then(function() {
        $scope.updateTotals();
      });
    }

  }
})();
      