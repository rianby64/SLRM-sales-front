;(function() {
  "use strict";
  angular.module('RDash')
    .service('goodsHTTP', ['$http', 'authService', function($http, authService) {
      
      this.add = function add(client) {
        return $http.post("/api/goods", client);
      };

      this.read = function read(criteria) {
        if (!criteria) {
          return $http.get("/api/goods");
        }
        if (criteria.id) {
          return $http.get("/api/goods/" + criteria.id); 
        }
      };

      this.remove = function remove(client) {
        return $http.delete("/api/goods/" + client.id);
      };

      this.update = function update(client) {
        return $http.put("/api/goods/" + client.id, client);
      };
    }]);
})();