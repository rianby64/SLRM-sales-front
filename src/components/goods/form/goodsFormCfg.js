;(function() {
  "use strict";
  
  angular
    .module('RDash')
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {    
      // Now set up the states
      $stateProvider
        .state('main.goods.create', {
          url: "/create",
          controller: ['$scope', 'goodsFormValidator', function($scope, goodsFormValidator) {
            $scope.validate = goodsFormValidator.validate;
          }],
          template: '\
          <entity-form \
            error=error \
            cancel=back \
            validate=validate \
            submit=onAdd \
            template-form="goods-form"> \
          </entity-form>'
        })
        .state('main.goods.edit', {
          url: "/edit/:id",
          controller: ['$scope', '$stateParams', /*'categoriesHTTP', 'providersHTTP',*/ 'goodsFormValidator', function($scope, $stateParams, /*categoriesHTTP, providersHTTP,*/ goodsFormValidator) {
            $scope.validate = goodsFormValidator.validate;
            var criteria = { 
              id: $stateParams.id
            };
            $scope
            .read(criteria)
            .success(function(response) {
              $scope.entity = response;
            })
            .error(function(reason) {
              $scope.error(reason);
            });
          }],
          template: '\
          <entity-form \
            error=error \
            cancel=back \
            validate=validate \
            submit=onUpdate \
            entity=entity \
            template-form="goods-form">\
          </entity-form>'
        });
    }]);
})();