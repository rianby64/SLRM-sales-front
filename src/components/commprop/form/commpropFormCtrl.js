;(function() {
  "use strict";
  angular
    .module('RDash')
    .controller('commpropFormController', ['$scope', 'clientsHTTP', 'brokersHTTP', function($scope, clientsHTTP, brokersHTTP) {
      
        $scope.entity.client = $scope.entity.client || {};
        $scope.entity.broker = $scope.entity.broker || {};
        
        $scope.refreshClients = function(clients) {
          clientsHTTP.read().success(function(response) {
            $scope.clients = response;
          });
        };
        
        $scope.refreshBrokers = function(brokers) {
          brokersHTTP.read().success(function(response) {
            $scope.brokers = response;
          });
        };
    }]);
})();