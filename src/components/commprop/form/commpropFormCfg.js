;(function() {
  "use strict";
  
  angular
    .module('RDash')
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {    
      // Now set up the states
      $stateProvider
        .state('main.commprop.create', {
          url: "/create",
          controller: ['$scope', 'commpropFormValidator', function($scope, commpropFormValidator) {
            $scope.validate = commpropFormValidator.validate;
          }],
          template: '\
          <entity-form \
            error=error \
            cancel=back \
            validate=validate \
            submit=onAdd \
            template-form="commprop-form" \
            action="create"> \
          </entity-form>'
        })
        .state('main.commprop.edit', {
          url: "/edit/:id",
          controller: ['$scope', '$stateParams', 'commpropFormValidator', function($scope, $stateParams, commpropFormValidator) {
            $scope.validate = commpropFormValidator.validate;
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
            template-form="commprop-form" \
            action="update"> \
          </entity-form>'
        });
    }]);
})();