;(function() {
  "use strict";
  
  angular
    .module('RDash')
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {    
      // Now set up the states
      $stateProvider
        .state('main.client.create', {
          url: "/create",
          controller: ['$scope', 'clientsFormValidator', function($scope, clientsFormValidator) {
            $scope.validate = clientsFormValidator.validate;
          }],
          template: '\
          <entity-form \
            error=error \
            cancel=back \
            validate=validate \
            submit=onAdd \
            template-form="clients-form" \
            action="create"> \
          </entity-form>'
        })
        .state('main.client.edit', {
          url: "/edit/:id",
          controller: ['$scope', '$stateParams', 'clientsFormValidator', function($scope, $stateParams, clientsFormValidator) {
            $scope.validate = clientsFormValidator.validate;
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
            template-form="clients-form" \
            action="update"> \
          </entity-form>'
        });
    }]);
})();