;(function() {
  "use strict";
  angular
    .module('SLRM')
    .controller('clientsController', ['$scope', '$http', 'authService', function($scope, $http, authService) {
      $scope.add = function add(client) {
        return $http.post("/api/clients", client, {
          headers: {
            'AUTHORIZATION': 'xToken ' + authService.getToken()
          }
        });
      };

      $scope.read = function read(criteria) {
        if (!criteria) {
          return $http.get("/api/clients", {
            headers: {
              'AUTHORIZATION': 'xToken ' + authService.getToken()
            }
          });
        }
        if (criteria.id) {
          return $http.get("/api/clients/" + criteria.id, {
            headers: {
              'AUTHORIZATION': 'xToken ' + authService.getToken()
            }
          }); 
        }
      };

      $scope.remove = function remove(client) {
        return $http.delete("/api/clients/" + client.id, {
          headers: {
            'AUTHORIZATION': 'xToken ' + authService.getToken()
          }
        });
      };

      $scope.update = function update(client) {
        return $http.patch("/api/clients/" + client.id, client, {
          headers: {
            'AUTHORIZATION': 'xToken ' + authService.getToken()
          }
        });
      };
    }]);
})();