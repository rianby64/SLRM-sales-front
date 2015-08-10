;(function() {
  "use strict";
  angular
    .module('RDash')
    .controller('goodsController', ['$scope', '$http', 'authService', function($scope, $http, authService) {
      $scope.add = function add(client) {
        return $http.post("/api/goods", client, {
//          headers: {
//            'AUTHORIZATION': 'xToken ' + authService.getToken()
//          }
        });
      };

      $scope.read = function read(criteria) {
        if (!criteria) {
          return $http.get("/api/goods", {
//            headers: {
//              'AUTHORIZATION': 'xToken ' + authService.getToken()
//            }
          });
        }
        if (criteria.id) {
          return $http.get("/api/goods/" + criteria.id, {
//            headers: {
//              'AUTHORIZATION': 'xToken ' + authService.getToken()
//            }
          }); 
        }
      };

      $scope.remove = function remove(client) {
        return $http.delete("/api/goods/" + client.id, {
//          headers: {
//            'AUTHORIZATION': 'xToken ' + authService.getToken()
//          }
        });
      };

      $scope.update = function update(client) {
        return $http.put("/api/goods/" + client.id, client, {
//          headers: {
//            'AUTHORIZATION': 'xToken ' + authService.getToken()
//          }
        });
      };
    }]);
})();