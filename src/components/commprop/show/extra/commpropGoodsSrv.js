;(function() {
  "use strict";
  angular.module('RDash')
    .service('commpropGoodsHTTP', ['$http', 'authService', function($http, authService) {
      var commercialProposalId = 0;
      this.setCommercialProposalId = function(id) {
        commercialProposalId = id;
      };
      this.add = function add(commprop) {
        return $http.post("/api/commprop/" + commercialProposalId + "/goods", commprop, {
//          headers: {
//            'AUTHORIZATION': 'xToken ' + authService.getToken()
//          }
        });
      };

      this.read = function read(criteria) {
        if (!criteria) {
          return $http.get("/api/commprop/" + commercialProposalId + "/goods", {
//            headers: {
//              'AUTHORIZATION': 'xToken ' + authService.getToken()
//            }
          });
        }
        if (criteria.id) {
          return $http.get("/api/commprop/" + commercialProposalId + "/goods/" + criteria.id, {
//            headers: {
//              'AUTHORIZATION': 'xToken ' + authService.getToken()
//            }
          }); 
        }
      };

      this.remove = function remove(commprop) {
        return $http.delete("/api/commprop/" + commercialProposalId + "/goods/" + commprop.id, {
//          headers: {
//            'AUTHORIZATION': 'xToken ' + authService.getToken()
//          }
        });
      };

      this.update = function update(commprop) {
        return $http.put("/api/commprop/" + commercialProposalId + "/goods/" + commprop.id, commprop, {
//          headers: {
//            'AUTHORIZATION': 'xToken ' + authService.getToken()
//          }
        });
      };
    
  }]);
})();