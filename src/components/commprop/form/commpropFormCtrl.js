;(function() {
  "use strict";
  angular
    .module('RDash')
    .controller('commpropFormController', ['$scope', 'clientsHTTP', 'brokersHTTP', commpropFormController]);

  function commpropFormController($scope, clientsHTTP, brokersHTTP) {
    var lastStatus;
    $scope.entity.client = $scope.entity.client || {};
    $scope.entity.broker = $scope.entity.broker || {};
    $scope.statusTypes = [{ type: '-', text: 'Не согласовано' },{ type: 'ok', text: 'Согласовано' },{ type: 'cancel', text: 'Отменено' }];
    
    $scope.$watch('entity.status', function(newValue, oldValue) {
      if (newValue === oldValue) {
        return;
      }
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
    
    $scope.refreshClients = function(clients) {
      var criteria;
      if (clients) {
        criteria = {
          search: clients
        };
      }
      clientsHTTP.read(criteria).success(function(response) {
        $scope.clients = response;
      });
    };

    $scope.refreshBrokers = function(brokers) {
      var criteria;
      if (brokers) {
        criteria = {
          search: brokers
        };
      }
      brokersHTTP.read(criteria).success(function(response) {
        $scope.brokers = response;
      });
    };
  }

})();
