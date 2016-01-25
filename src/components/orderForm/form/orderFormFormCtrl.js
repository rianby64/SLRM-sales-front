;(function() {
  "use strict";
  angular
    .module('RDash')
    .controller('orderFormFormController', ['$scope', 'commpropVariantsHTTP', orderFormFormController]);

  function orderFormFormController($scope, commpropVariantsHTTP) {
    var lastStatus;
    $scope.statusTypes = [{ type: '-', text: 'Не оплачен' },{ type: 'ok', text: 'Оплачен' },{ type: 'cancel', text: 'Отменён' }];
    
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
      });
    };
  }
})();
    