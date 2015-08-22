;(function() {
  "use strict";
  angular.module('RDash')
    .service('categoriesHTTP', ['$http', 'authService', function($http, authService) {
    
      this.add = function add(client) {
        return $http.post("/api/categories", client);
      };

      this.read = function read(criteria) {
        if (!criteria) {
          return $http.get("/api/categories");
        }
        if (criteria.id) {
          return $http.get("/api/categories/" + criteria.id); 
        }
      };

      this.remove = function remove(client) {
        return $http.delete("/api/categories/" + client.id);
      };

      this.update = function update(client) {
        return $http.put("/api/categories/" + client.id, client);
      };
    
  }]);
})();