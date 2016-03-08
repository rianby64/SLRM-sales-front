;(function() {
  "use strict";
  angular
    .module('RDash')
    .controller('orderFormFormController', ['$scope', 'commpropVariantsHTTP', 'commpropGoodsHTTP', orderFormFormController]);

  function orderFormFormController($scope, commpropVariantsHTTP, commpropGoodsHTTP) {
    var lastStatus;
    $scope.statusTypes = [{ type: '-', text: 'Не оплачен' },{ type: 'ok', text: 'Оплачен' },{ type: 'cancel', text: 'Отменён' }];
    $scope.vitrine = [];
    $scope.variants = [];
    
    $scope.$watch('entity.commercial_proposal_variant.name', function(name) {
      // i zdes nachinaetsa pizdiets!
      var i, l = $scope.variants.length;
      for (i = 0; i < l; i++) {
        if ($scope.variants[i].name === name) {
          $scope.vitrine = $scope.variants[i].goods;
        }
      }
    });
    $scope.$watch('entity.status', function(newValue, oldValue) {
      if (((newValue === 'cancel') || (newValue === 'ok')) && (oldValue !== undefined)) {
        $('#changeStatusModal').modal('show');
        lastStatus = oldValue;
      }
    });
    
    $scope.confirmStatusChange = function confirmStatusChange() {
      $('#changeStatusModal').modal('hide');
    }
  
    $scope.cancelStatusChange = function confirmStatusChange() {
      $scope.entity.status = lastStatus;
      $('#changeStatusModal').modal('hide');
    }
    
    $scope.refreshVariants = function(variants) {
      var criteria;
      if (variants) {
        criteria = {
          search: variants
        };
      }
      commpropVariantsHTTP.setCommercialProposalId($scope.entity.commercialProposalId);
      commpropVariantsHTTP.read(criteria).success(function(response) {
        $scope.variants = response;
        $scope.variants.forEach(function(variant){
          commpropGoodsHTTP.setCommercialProposalVariantsId(variant.id);
          commpropGoodsHTTP.read().success(function(response) {
            variant.goods = response;
            if (variant.name === $scope.entity.commercial_proposal_variant.name) {
              $scope.vitrine = variant.goods;
            }
          });
        });
      });
    };
  }
})();
    