;(function() {
  "use strict";
  angular
    .module('RDash')
    .controller('orderFormFormController', ['$scope', 'commpropVariantsHTTP', orderFormFormController]);

  function orderFormFormController($scope, commpropVariantsHTTP) {
    var lastStatus;
    $scope.statusTypes = [{ type: '-', text: 'Не оплачен' },{ type: 'ok', text: 'Оплачен' },{ type: 'cancel', text: 'Отменено' }];
    
    $scope.$watch('entity.status', function(newValue, oldValue) {
      if (((newValue === 'cancel') || (newValue === 'ok')) && (oldValue !== undefined)) {
        $('#changeStatusModal').modal('show');
        lastStatus = oldValue;
      }
    });
    
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
    