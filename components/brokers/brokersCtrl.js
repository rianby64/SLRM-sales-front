;(function() {
  "use strict";
  angular
    .module('SLRM')
    .controller('brokersController', ['$scope', '$http', 'authService', function($scope, $http, authService) {
      $scope.add = function add(client) {
        return $http.post("/api/brokers", client, {
          headers: {
            'AUTHORIZATION': 'xToken ' + authService.getToken()
          }
        });
      };

      $scope.read = function read(criteria) {
        if (!criteria) {
          return $http.get("/api/brokers", {
            headers: {
              'AUTHORIZATION': 'xToken ' + authService.getToken()
            }
          });
        }
        if (criteria.id) {
          return $http.get("/api/brokers/" + criteria.id, {
            headers: {
              'AUTHORIZATION': 'xToken ' + authService.getToken()
            }
          }); 
        }
      };

      $scope.remove = function remove(client) {
        return $http.delete("/api/brokers/" + client.id, {
          headers: {
            'AUTHORIZATION': 'xToken ' + authService.getToken()
          }
        });
      };

      $scope.update = function update(client) {
        return $http.patch("/api/brokers/" + client.id, client, {
          headers: {
            'AUTHORIZATION': 'xToken ' + authService.getToken()
          }
        });
      };
    }]);
})();