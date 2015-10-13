;(function() {
  "use strict";
  angular
    .module('RDash')
    .controller('goodsFormController', ['$scope', 'categoriesHTTP', 'providersHTTP', function($scope, categoriesHTTP, providersHTTP) {
      
      $scope.currencyTypes = [{ type: 'RUB', text: 'RUB' },{ type: 'EUR', text: 'EUR' },{ type: 'USD', text: 'USD' }];
      $scope.entity.currency = $scope.entity.currency || 'RUB';
      $scope.entity.category = $scope.entity.category || {};
      $scope.entity.provider = $scope.entity.provider || {};

      $scope.refreshCategories = function(category) {
        var criteria;
        if (category) {
          criteria = {
            search: category
          };
        }
        categoriesHTTP.read(criteria).success(function(response) {
          $scope.categories = response;
        });
      };

      $scope.refreshProviders = function(provider) {
        var criteria = { type: "manufacturers" };
        if (provider) {
          criteria.search = provider;
        }
        providersHTTP.read(criteria).success(function(response) {
          $scope.providers = response;
        });
      };
      
    }]);
})();