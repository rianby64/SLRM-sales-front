;(function() {
  "use strict";
  angular
    .module('RDash')
    .controller('goodsFormController', ['$scope', 'categoriesHTTP', function($scope, categoriesHTTP) {
      
        $scope.entity.category = $scope.entity.category || {};
        $scope.refreshCategories = function(category) {
          categoriesHTTP.read().success(function(response) {
            $scope.categories = response;
          });
        };
      
    }]);
})();