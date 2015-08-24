;(function() {
  "use strict";
  angular
    .module('RDash')
    .controller('goodsFormController', ['$scope', 'categoriesHTTP', 'providersHTTP', function($scope, categoriesHTTP, providersHTTP) {
      
        $scope.entity.category = $scope.entity.category || {};
        $scope.entity.provider = $scope.entity.provider || {};
      
        $scope.refreshCategories = function(category) {
          categoriesHTTP.read().success(function(response) {
            $scope.categories = response;
          });
        };
      
        $scope.refreshProviders = function(provider) {
          providersHTTP.read({ type: "manufacturers" }).success(function(response) {
            $scope.providers = response;
          });
        };
    }]);
})();