;(function() {
  "use strict";
  
  angular
    .module('RDash')
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {    
      // Now set up the states
      $stateProvider
        .state('main.providers.create', {
          url: "/create",
          controller: ['$scope', 'providersFormValidator', function($scope, providersFormValidator) {
            $scope.validate = function(provider) {
              return providersFormValidator.validate("providers", provider);
            }
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
            $scope.validate = function(provider) {
              return providersFormValidator.validate("providers", provider);
            }
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
        })
      
        .state('main.manufacturers.create', {
          url: "/create",
          controller: ['$scope', 'providersFormValidator', function($scope, providersFormValidator) {
            $scope.validate = function(provider) {
              return providersFormValidator.validate("manufacturers", provider);
            }
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
        .state('main.manufacturers.edit', {
          url: "/edit/:id",
          controller: ['$scope', '$stateParams', 'providersFormValidator', function($scope, $stateParams, providersFormValidator) {
            $scope.validate = function(provider) {
              return providersFormValidator.validate("manufacturers", provider);
            }
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