;(function() {
  "use strict";
  angular
    .module('SLRM')
    .controller('producersController', ['$scope', '$http', 'authService', function($scope, $http, authService) {
      $scope.add = function add(client) {
        return $http.post("/api/producers", client, {
          headers: {
            'AUTHORIZATION': 'xToken ' + authService.getToken()
          }
        });
      };

      $scope.read = function read(criteria) {
        if (!criteria) {
          return $http.get("/api/producers", {
            headers: {
              'AUTHORIZATION': 'xToken ' + authService.getToken()
            }
          });
        }
        if (criteria.id) {
          return $http.get("/api/producers/" + criteria.id, {
            headers: {
              'AUTHORIZATION': 'xToken ' + authService.getToken()
            }
          }); 
        }
      };

      $scope.remove = function remove(client) {
        return $http.delete("/api/producers/" + client.id, {
          headers: {
            'AUTHORIZATION': 'xToken ' + authService.getToken()
          }
        });
      };

      $scope.update = function update(client) {
        return $http.patch("/api/producers/" + client.id, client, {
          headers: {
            'AUTHORIZATION': 'xToken ' + authService.getToken()
          }
        });
      };
    }]);
})();