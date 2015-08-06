;(function() {
  "use strict";
  angular
    .module('SLRM')
    .controller('providersController', ['$scope', '$http', 'authService', function($scope, $http, authService) {
      $scope.add = function add(client) {
        return $http.post("/api/providers", client, {
          headers: {
            'AUTHORIZATION': 'xToken ' + authService.getToken()
          }
        });
      };

      $scope.read = function read(criteria) {
        if (!criteria) {
          return $http.get("/api/providers", {
            headers: {
              'AUTHORIZATION': 'xToken ' + authService.getToken()
            }
          });
        }
        if (criteria.id) {
          return $http.get("/api/providers/" + criteria.id, {
            headers: {
              'AUTHORIZATION': 'xToken ' + authService.getToken()
            }
          }); 
        }
      };

      $scope.remove = function remove(client) {
        return $http.delete("/api/providers/" + client.id, {
          headers: {
            'AUTHORIZATION': 'xToken ' + authService.getToken()
          }
        });
      };

      $scope.update = function update(client) {
        return $http.patch("/api/providers/" + client.id, client, {
          headers: {
            'AUTHORIZATION': 'xToken ' + authService.getToken()
          }
        });
      };
    }]);
})();