;(function() {
  "use strict";
  angular.module('RDash')
    .service('commpropHTTP', ['$http', 'authService', function($http, authService) {
    
      this.add = function add(client) {
        return $http.post("/api/commprop", client, {
//          headers: {
//            'AUTHORIZATION': 'xToken ' + authService.getToken()
//          }
        });
      };

      this.read = function read(criteria) {
        if (!criteria) {
          return $http.get("/api/commprop", {
//            headers: {
//              'AUTHORIZATION': 'xToken ' + authService.getToken()
//            }
          });
        }
        if (criteria.id) {
          return $http.get("/api/commprop/" + criteria.id, {
//            headers: {
//              'AUTHORIZATION': 'xToken ' + authService.getToken()
//            }
          }); 
        }
      };

      this.remove = function remove(client) {
        return $http.delete("/api/commprop/" + client.id, {
//          headers: {
//            'AUTHORIZATION': 'xToken ' + authService.getToken()
//          }
        });
      };

      this.update = function update(client) {
        return $http.put("/api/commprop/" + client.id, client, {
//          headers: {
//            'AUTHORIZATION': 'xToken ' + authService.getToken()
//          }
        });
      };
    
  }]);
})();