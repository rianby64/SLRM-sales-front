;(function() {
  "use strict";
  angular.module('RDash')
    .service('adminHTTP', ['$http', 'authService', function($http, authService) {
      
      this.add = function add(user) {
        return $http.post("/api/users", user);
      };

      this.read = function read(criteria) {
        if (!criteria) {
          return $http.get("/api/users");
        }
        if (criteria.id) {
          return $http.get("/api/users/" + criteria.id); 
        }
      };

      this.remove = function remove(user) {
        return $http.delete("/api/users/" + user.id);
      };

      this.update = function update(user) {
        return $http.put("/api/users/" + user.id, user);
      };
    }]);
})();