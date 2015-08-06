;(function() {
  "use strict";
  
  angular
    .module('SLRM')
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {    
      // Now set up the states
      $stateProvider
        .state('main.producers.create', {
          url: "/create",
          controller: ['$scope', 'producersFormValidator', function($scope, producersFormValidator) {
            $scope.validate = producersFormValidator.validate;
          }],
          template: '\
          <entity-form \
            error=error \
            cancel=back \
            validate=validate \
            submit=onAdd \
            template-form="producers-form"> \
          </entity-form>'
        })
        .state('main.producers.edit', {
          url: "/edit/:id",
          controller: ['$scope', '$stateParams', 'producersFormValidator', function($scope, $stateParams, producersFormValidator) {
            $scope.validate = producersFormValidator.validate;
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
            template-form="producers-form">\
          </entity-form>'
        });
    }]);
})();