;(function() {
  "use strict";
  angular.module('RDash')
    .service('clientsHTTP', ['$http', 'authService', function($http, authService) {
      this.add = function add(client) {
        return $http.post("/api/clients", client);
      };

      this.read = function read(criteria) {
        if (!criteria) {
          return $http.get("/api/clients");
        }
        if (criteria.id) {
          return $http.get("/api/clients/" + criteria.id); 
        }
      };

      this.remove = function remove(client) {
        return $http.delete("/api/clients/" + client.id);
      };

      this.update = function update(client) {
        return $http.put("/api/clients/" + client.id, client);
      };
    }]);
})();