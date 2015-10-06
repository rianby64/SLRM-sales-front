;(function() {
  "use strict";
  angular.module('RDash')
    .service('goodsHTTP', ['$http', 'authService', function($http, authService) {
      
      this.add = function add(client) {
        return $http.post("/api/goods", client);
      };

      this.read = function read(criteria) {
        var criteria_ = criteria || { };
        if (!criteria_.id) {
          return $http.get("/api/goods", { params: criteria_ });
        }
        if (criteria_.id) {
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