;(function() {
  "use strict";
  angular.module('RDash')
    .service('categoriesHTTP', ['$http', 'authService', function($http, authService) {
    
      this.add = function add(client) {
        return $http.post("/api/categories", client, {
//          headers: {
//            'AUTHORIZATION': 'xToken ' + authService.getToken()
//          }
        });
      };

      this.read = function read(criteria) {
        if (!criteria) {
          return $http.get("/api/categories", {
//            headers: {
//              'AUTHORIZATION': 'xToken ' + authService.getToken()
//            }
          });
        }
        if (criteria.id) {
          return $http.get("/api/categories/" + criteria.id, {
//            headers: {
//              'AUTHORIZATION': 'xToken ' + authService.getToken()
//            }
          }); 
        }
      };

      this.remove = function remove(client) {
        return $http.delete("/api/categories/" + client.id, {
//          headers: {
//            'AUTHORIZATION': 'xToken ' + authService.getToken()
//          }
        });
      };

      this.update = function update(client) {
        return $http.put("/api/categories/" + client.id, client, {
//          headers: {
//            'AUTHORIZATION': 'xToken ' + authService.getToken()
//          }
        });
      };
    
  }]);
})();