;(function() {
  "use strict";
  angular.module('RDash')
    .service('commpropGoodsHTTP', ['$http', 'authService', function($http, authService) {
      var commercialProposalVariantsId = 0;
      this.setCommercialProposalVariantsId = function(id) {
        commercialProposalVariantsId = id;
      };
      this.add = function add(commprop) {
        return $http.post("/api/commpropvariant/" + commercialProposalVariantsId + "/goods", commprop);
      };

      this.read = function read(criteria) {
        var criteria_ = criteria || {};
        if (!criteria_.id) {
          return $http.get("/api/commpropvariant/" + commercialProposalVariantsId + "/goods", { params: criteria_ });
        }
        if (criteria_.id) {
          return $http.get("/api/commpropvariant/" + commercialProposalVariantsId + "/goods/" + criteria_.id);
        }
      };

      this.remove = function remove(commprop) {
        return $http.delete("/api/commpropvariant/" + commercialProposalVariantsId + "/goods/" + commprop.id);
      };

      this.update = function update(commprop) {
        return $http.put("/api/commpropvariant/" + commercialProposalVariantsId + "/goods/" + commprop.id, commprop);
      };

  }]);
})();
