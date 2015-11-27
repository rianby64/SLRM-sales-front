;(function() {
  "use strict";

  angular
    .module('RDash')
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
      // Now set up the states
      $stateProvider
        .state('admin.create', {
          url: "/create",
          controller: ['$scope', 'adminFormValidator', function($scope, adminFormValidator) {
            $scope.validate = adminFormValidator.validate;
          }],
          template: '\
          <entity-form \
            error=error \
            cancel=back \
            validate=validate \
            submit=onAdd \
            template-form="admin-form" \
            action="create"> \
          </entity-form>'
        })
        .state('admin.edit', {
          url: "/edit/:id",
          controller: ['$scope', '$stateParams', 'adminFormValidator', function($scope, $stateParams, adminFormValidator) {
            $scope.validate = adminFormValidator.validate;
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
            template-form="admin-form" \
            action="update"> \
          </entity-form>'
        });
    }]);
})();
