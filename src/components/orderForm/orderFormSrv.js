;(function() {
  "use strict";
  angular.module('RDash')
    .service('orderFormHTTP', ['$http', 'authService', function($http, authService) {
      this.read = function read(criteria) {
        var criteria_ = criteria || { };
        criteria_.author = authService.user.name;
        if (!criteria_.id) {
          return $http.get("/api/orderForm", { params: criteria_ });
        }
        if (criteria_.id) {
          return $http.get("/api/orderForm/" + criteria.id); 
        }
      };

      this.update = function update(client) {
        return $http.put("/api/orderForm/" + client.id, client);
      };
  }]);
})();
