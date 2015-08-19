;(function() {
  "use strict";
  angular.module('RDash')
    .service('providersHTTP', ['$http', 'authService', function($http, authService) {
      
      this.add = function add(client) {
        return $http.post("/api/providers", client, {
//          headers: {
//            'AUTHORIZATION': 'xToken ' + authService.getToken()
//          }
        });
      };

      this.read = function read(criteria) {
        if (!criteria) {
          return $http.get("/api/providers", {
//            headers: {
//              'AUTHORIZATION': 'xToken ' + authService.getToken()
//            }
          });
        }
        if (criteria.id) {
          return $http.get("/api/providers/" + criteria.id, {
//            headers: {
//              'AUTHORIZATION': 'xToken ' + authService.getToken()
//            }
          }); 
        }
      };

      this.remove = function remove(client) {
        return $http.delete("/api/providers/" + client.id, {
//          headers: {
//            'AUTHORIZATION': 'xToken ' + authService.getToken()
//          }
        });
      };

      this.update = function update(client) {
        return $http.put("/api/providers/" + client.id, client, {
//          headers: {
//            'AUTHORIZATION': 'xToken ' + authService.getToken()
//          }
        });
      };
    
  }]);
})();