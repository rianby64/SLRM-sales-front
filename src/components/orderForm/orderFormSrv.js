;(function() {
  "use strict";
  angular.module('RDash')
    .service('orderFormHTTP', ['$http', 'authService', function($http, authService) {
    
      this.add = function add(client) {
        return $http.post("/api/orderForm", client);
      };

      this.read = function read(criteria) {
        var criteria_ = criteria || { };
        if (!criteria_.id) {
          return $http.get("/api/orderForm", { params: criteria_ });
        }
        if (criteria_.id) {
          return $http.get("/api/orderForm/" + criteria.id); 
        }
      };

      this.remove = function remove(client) {
        return $http.delete("/api/orderForm/" + client.id);
      };

      this.update = function update(client) {
        return $http.put("/api/orderForm/" + client.id, client);
      };
  }]);
})();
