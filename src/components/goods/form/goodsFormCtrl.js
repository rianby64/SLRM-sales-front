;(function() {
  "use strict";
  angular
    .module('RDash')
    .controller('goodsFormController', ['$scope', 'categoriesHTTP', 'providersHTTP', function($scope, categoriesHTTP, providersHTTP) {
      
        $scope.entity.category = $scope.entity.category || {};
        $scope.refreshCategories = function(category) {
          console.log(category);
          categoriesHTTP.read().success(function(response) {
            $scope.categories = response;
          });
        };
      
        $scope.entity.provider = $scope.entity.provider || {};
        $scope.refreshProviders = function(provider) {
          providersHTTP.read().success(function(response) {
            $scope.providers = response;
          });
        };
      
    }]);
})();