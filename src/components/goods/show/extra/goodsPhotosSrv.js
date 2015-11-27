;(function() {
  "use strict";
  angular.module('RDash')
    .service('goodsPhotosHTTP', ['$http', 'authService', function($http, authService) {
      var goodId = 0;
      this.setGoodId = function(id) {
        goodId = id;
      };
      this.add = function add(goodphoto) {
        return $http.post("/api/goods/" + goodId + "/photos", goodphoto);
      };

      this.read = function read(criteria) {
        if (!criteria) {
          return $http.get("/api/goods/" + goodId + "/photos");
        }
        if (criteria.id) {
          return $http.get("/api/goods/" + goodId + "/photos/" + criteria.id);
        }
      };

      this.remove = function remove(goodphoto) {
        return $http.delete("/api/goods/" + goodId + "/photos/" + goodphoto.id);
      };

      this.update = function update(goodphoto) {
        return $http.put("/api/goods/" + goodId + "/photos/" + goodphoto.id, goodphoto);
      };

  }]);
})();
