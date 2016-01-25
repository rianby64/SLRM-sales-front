;(function() {
  "use strict";
  angular.module('RDash')
    .service('orderFormHTTP', ['$http', 'authService', function($http, authService) {
      this.read = function read(criteria) {
        var criteria_ = criteria || { };
        criteria_.author = authService.user.name;
        if (!criteria_.id) {
          return $http.get("/api/orderform", { params: criteria_ });
        }
        if (criteria_.id) {
          return $http.get("/api/orderform/" + criteria.id); 
        }
      };

      this.update = function update(client) {
        return $http.put("/api/orderform/" + client.id, client);
      };
  }]);
})();
