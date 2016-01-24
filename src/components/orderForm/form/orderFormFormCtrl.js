;(function() {
  "use strict";
  angular
    .module('RDash')
    .controller('orderFormFormController', ['$scope', orderFormFormController]);

  function orderFormFormController($scope) {
    var lastStatus;
    $scope.statusTypes = [{ type: '-', text: 'Не оплачен' },{ type: 'ok', text: 'Оплачен' },{ type: 'cancel', text: 'Отменено' }];
    
    $scope.$watch('entity.status', function(newValue, oldValue) {
      if (((newValue === 'cancel') || (newValue === 'ok')) && (oldValue !== undefined)) {
        $('#changeStatusModal').modal('show');
        lastStatus = oldValue;
      }
    });
  }
})();
    