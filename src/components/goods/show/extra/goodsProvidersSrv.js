;(function() {
  "use strict";
  angular.module('RDash')
    .service('goodsProvidersHTTP', ['$http', 'authService', function($http, authService) {
      var goodId = 0;
      this.setGoodId = function(id) {
        goodId = id;
      };
      this.add = function add(goodprovider) {
        return $http.post("/api/goods/" + goodId + "/goodsproviders", goodprovider, {
//          headers: {
//            'AUTHORIZATION': 'xToken ' + authService.getToken()
//          }
        });
      };

      this.read = function read(criteria) {
        if (!criteria) {
          return $http.get("/api/goods/" + goodId + "/goodsproviders", {
//            headers: {
//              'AUTHORIZATION': 'xToken ' + authService.getToken()
//            }
          });
        }
        if (criteria.id) {
          return $http.get("/api/goods/" + goodId + "/goodsproviders/" + criteria.id, {
//            headers: {
//              'AUTHORIZATION': 'xToken ' + authService.getToken()
//            }
          }); 
        }
      };

      this.remove = function remove(goodprovider) {
        return $http.delete("/api/goods/" + goodId + "/goodsproviders/" + goodprovider.id, {
//          headers: {
//            'AUTHORIZATION': 'xToken ' + authService.getToken()
//          }
        });
      };

      this.update = function update(goodprovider) {
        return $http.put("/api/goods/" + goodId + "/goodsproviders/" + goodprovider.id, goodprovider, {
//          headers: {
//            'AUTHORIZATION': 'xToken ' + authService.getToken()
//          }
        });
      };
    
  }]);
})();