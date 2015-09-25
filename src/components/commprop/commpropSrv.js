;(function() {
  "use strict";
  angular.module('RDash')
    .service('commpropHTTP', ['$http', 'authService', function($http, authService) {
    
      this.add = function add(client) {
//        console.log(authService.user);
        return $http.post("/api/commprop", client);
      };

      this.read = function read(criteria) {
        if (!criteria) {
          return $http.get("/api/commprop");
        }
        if (criteria.id) {
          return $http.get("/api/commprop/" + criteria.id); 
        }
      };

      this.remove = function remove(client) {
        return $http.delete("/api/commprop/" + client.id);
      };

      this.update = function update(client) {
        return $http.put("/api/commprop/" + client.id, client);
      };
    
  }]);
})();