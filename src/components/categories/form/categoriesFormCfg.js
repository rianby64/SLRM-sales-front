;(function() {
  "use strict";
  
  angular
    .module('RDash')
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {    
      // Now set up the states
      $stateProvider
        .state('main.categories.create', {
          url: "/create",
          controller: ['$scope', 'categoriesFormValidator', function($scope, categoriesFormValidator) {
            $scope.validate = categoriesFormValidator.validate;
          }],
          template: '\
          <entity-form \
            error=error \
            cancel=back \
            validate=validate \
            submit=onAdd \
            template-form="categories-form" \
            action="create"> \
          </entity-form>'
        })
        .state('main.categories.edit', {
          url: "/edit/:id",
          controller: ['$scope', '$stateParams', 'categoriesFormValidator', function($scope, $stateParams, categoriesFormValidator) {
            $scope.validate = categoriesFormValidator.validate;
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
            template-form="categories-form" \
            action="update"> \
          </entity-form>'
        });
    }]);
})();