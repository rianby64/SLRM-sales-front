;(function() {
  "use strict";
  angular
    .module('RDash')
    .controller('commpropPDFcontroller', [
      '$scope',
      '$stateParams',
      'commpropHTTP',
      'commpropVariantsHTTP',
      'commpropGoodsHTTP',
      'goodsPhotosHTTP',
      'authService',
      commpropPDFcontroller
    ]);
  
  function commpropPDFcontroller($scope, $stateParams, commpropHTTP, commpropVariantsHTTP, commpropGoodsHTTP, goodsPhotosHTTP, authService) {
    $scope.error = $scope.error || function() { console.log('commpropPDF:config:state:controller>>error empty'); };
    $scope.manager = {};
    $scope.manager.name = '';
    $scope.manager.telephone = '';

    $scope.commprop = {};
    $scope.today = new Date();
    $scope.variants = [];
    
    commpropHTTP
    .read({
      id: $stateParams.id
    })
    .success(function(commprop) {
      authService.check().then(function(user) {
        $scope.manager.name = authService.user.name;
        $scope.manager.telephone = authService.user.telephone;
      });
      $scope.commprop = commprop;
      
      commpropVariantsHTTP.setCommercialProposalId(commprop.id);
      commpropVariantsHTTP.read().success(function(variants) {
        $scope.variants = variants;
        $scope.variants.forEach(function(variant) {
          variant.goods = [];
          commpropGoodsHTTP.setCommercialProposalVariantsId(variant.id);
          
          commpropGoodsHTTP
          .read()
          .success(function(goods) {
            variant.goods = goods;
            variant.totalPriceRUB = 0;
            variant.totalPriceUSD = 0;
            variant.totalPriceEUR = 0;
            variant.totalCount = 0;
            
            variant.goods.forEach(function(item) {
              if (item.currency === "RUB") {
                variant.totalPriceRUB += item.good.price * item.quantity;
              }
              if (item.currency === "USD") {
                variant.totalPriceUSD += item.good.price * item.quantity;
              }
              if (item.currency === "EUR") {
                variant.totalPriceEUR += item.good.price * item.quantity;
              }
              variant.totalCount += item.quantity;
              item.photos = [];

              goodsPhotosHTTP.setGoodId(item.good.id);
              goodsPhotosHTTP
              .read()
              .success(function(photos) {
                item.photos = photos;
              })
              .error(function(reason) {
                $scope.error(reason);
              });
            });
          })
          .error(function(reason) {
            $scope.error(reason);
          });
        });
      })
      .error(function(reason) {
        $scope.error(reason);
      });
    })
    .error(function(reason) {
      $scope.error(reason);
    });
  }
})();
  
