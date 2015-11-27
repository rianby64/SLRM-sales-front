;(function() {
  "use strict";
  angular
    .module('RDash')
    .controller('commpropFormController', ['$scope', 'clientsHTTP', 'brokersHTTP', function($scope, clientsHTTP, brokersHTTP) {

        $scope.entity.client = $scope.entity.client || {};
        $scope.entity.broker = $scope.entity.broker || {};

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
    }]);
})();
