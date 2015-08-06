;(function() {
  "use strict";
  
  angular
    .module('SLRM')
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {    
      // Now set up the states
      $stateProvider
        .state('main.providers.create', {
          url: "/create",
          controller: ['$scope', 'providersFormValidator', function($scope, providersFormValidator) {
            $scope.validate = providersFormValidator.validate;
          }],
          template: '\
          <entity-form \
            error=error \
            cancel=back \
            validate=validate \
            submit=onAdd \
            template-form="providers-form"> \
          </entity-form>'
        })
        .state('main.providers.edit', {
          url: "/edit/:id",
          controller: ['$scope', '$stateParams', 'providersFormValidator', function($scope, $stateParams, providersFormValidator) {
            $scope.validate = providersFormValidator.validate;
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
            template-form="providers-form">\
          </entity-form>'
        });
    }]);
})();