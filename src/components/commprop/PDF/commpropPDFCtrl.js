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
      'authService',
      function($scope, $stateParams, commpropHTTP, commpropGoodsHTTP, goodsPhotosHTTP, authService) {
        $scope.error = $scope.error || function() { console.log('commpropPDF:config:state:controller>>error empty'); };
        $scope.commprop = {};
        $scope.goods = [];
        $scope.totalPrice = 0;
        $scope.totalCount = 0;
        $scope.manager = {};
        $scope.manager.name = '';
        $scope.manager.telephone = '';
        
        commpropHTTP
        .read({
          id: $stateParams.id
        })
        .success(function(commprop) {
          authService.check().then(function(user) {
            $scope.manager.name = authService.user.name;
            $scope.manager.telephone = authService.user.name;
          });
          $scope.commprop = commprop;
          $scope.totalPrice = 0;
          $scope.totalCount = 0;
          
          commpropGoodsHTTP.setCommercialProposalId(commprop.id);
          commpropGoodsHTTP
          .read()
          .success(function(goods) {
            $scope.goods = goods;
            $scope.goods.forEach(function(item) {
              $scope.totalPrice += item.good.price * item.quantity;
              $scope.totalCount += item.quantity;
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
  