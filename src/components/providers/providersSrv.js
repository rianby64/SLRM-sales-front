;(function() {
  "use strict";
  angular.module('RDash')
    .service('providersHTTP', ['$http', 'authService', function($http, authService) {
      
      this.add = function add(client) {
        return $http.post("/api/providers", client);
      };

      this.read = function read(criteria) {
        var criteria_ = criteria || { };
        if (!criteria_.id) {
          return $http.get("/api/providers", { params: criteria_ });
        }
        if (criteria_.id) {
          return $http.get("/api/providers/" + criteria_.id); 
        }
      };

      this.remove = function remove(client) {
        return $http.delete("/api/providers/" + client.id);
      };

      this.update = function update(client) {
        return $http.put("/api/providers/" + client.id, client);
      };
    
  }]);
})();