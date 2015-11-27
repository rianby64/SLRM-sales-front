;(function() {
  "use strict";
  angular.module('RDash')
    .service('commpropGoodsHTTP', ['$http', 'authService', function($http, authService) {
      var commercialProposalId = 0;
      this.setCommercialProposalId = function(id) {
        commercialProposalId = id;
      };
      this.add = function add(commprop) {
        return $http.post("/api/commprop/" + commercialProposalId + "/goods", commprop);
      };

      this.read = function read(criteria) {
        var criteria_ = criteria || {};
        if (!criteria_.id) {
          return $http.get("/api/commprop/" + commercialProposalId + "/goods", { params: criteria_ });
        }
        if (criteria_.id) {
          return $http.get("/api/commprop/" + commercialProposalId + "/goods/" + criteria_.id);
        }
      };

      this.remove = function remove(commprop) {
        return $http.delete("/api/commprop/" + commercialProposalId + "/goods/" + commprop.id);
      };

      this.update = function update(commprop) {
        return $http.put("/api/commprop/" + commercialProposalId + "/goods/" + commprop.id, commprop);
      };

  }]);
})();
