;(function() {
  "use strict";
  angular
    .module('RDash')
    .controller('commpropPDFcontroller', [
      '$scope', 
      '$stateParams', 
      'commpropHTTP', 
      'commpropGoodsHTTP',
      'goodsPhotosHTTP',
      function($scope, $stateParams, commpropHTTP, commpropGoodsHTTP, goodsPhotosHTTP) {
        $scope.error = $scope.error || function() { console.log('commpropPDF:config:state:controller>>error empty'); };
        $scope.commprop = {};
        $scope.goods = [];
        
        commpropHTTP
        .read({
          id: $stateParams.id
        })
        .success(function(commprop) {
          $scope.commprop = commprop;
          
          commpropGoodsHTTP.setCommercialProposalId(commprop.id);
          commpropGoodsHTTP
          .read()
          .success(function(goods) {
            $scope.goods = goods;
            $scope.goods.forEach(function(item) {
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
        })
        .error(function(reason) {
          $scope.error(reason);
        });
      }
    ]);
})();
  