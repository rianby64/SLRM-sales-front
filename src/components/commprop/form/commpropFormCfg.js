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
              if (response.alert_date) {
                var alert_date = new Date(response.alert_date);
                response.alert_date = new Date(alert_date.toLocaleDateString());
              }
              if (response.sent_date) {
                var sent_date = new Date(response.sent_date);
                response.sent_date = new Date(sent_date.toLocaleDateString());
              }
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