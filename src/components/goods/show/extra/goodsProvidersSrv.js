;(function() {
  "use strict";
  angular.module('RDash')
    .service('goodsProvidersHTTP', ['$http', 'authService', function($http, authService) {
      var goodId = 0;
      this.setGoodId = function(id) {
        goodId = id;
      };
      this.add = function add(goodprovider) {
        return $http.post("/api/goods/" + goodId + "/goodsproviders", goodprovider);
      };

      this.read = function read(criteria) {
        if (!criteria) {
          return $http.get("/api/goods/" + goodId + "/goodsproviders");
        }
        if (criteria.id) {
          return $http.get("/api/goods/" + goodId + "/goodsproviders/" + criteria.id); 
        }
      };

      this.remove = function remove(goodprovider) {
        return $http.delete("/api/goods/" + goodId + "/goodsproviders/" + goodprovider.id);
      };

      this.update = function update(goodprovider) {
        return $http.put("/api/goods/" + goodId + "/goodsproviders/" + goodprovider.id, goodprovider);
      };
    
  }]);
})();