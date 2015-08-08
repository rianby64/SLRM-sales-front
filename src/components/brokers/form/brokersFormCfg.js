;(function() {
  "use strict";
  
  angular
    .module('RDash')
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {    
      // Now set up the states
      $stateProvider
        .state('main.brokers.create', {
          url: "/create",
          controller: ['$scope', 'brokersFormValidator', function($scope, brokersFormValidator) {
            $scope.validate = brokersFormValidator.validate;
          }],
          template: '\
          <entity-form \
            error=error \
            cancel=back \
            validate=validate \
            submit=onAdd \
            template-form="brokers-form"> \
          </entity-form>'
        })
        .state('main.brokers.edit', {
          url: "/edit/:id",
          controller: ['$scope', '$stateParams', 'brokersFormValidator', function($scope, $stateParams, brokersFormValidator) {
            $scope.validate = brokersFormValidator.validate;
            var criteria = { 
              id: $stateParams.id
            };
            $scope
            .read(criteria)
            .success(function(response) {
              if (response.birth_date) {
                var birth_date = new Date(response.birth_date);
                response.birth_date = new Date(birth_date.toLocaleDateString());
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
            template-form="brokers-form">\
          </entity-form>'
        });
    }]);
})();