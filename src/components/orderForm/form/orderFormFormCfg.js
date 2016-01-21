;(function() {
  "use strict";
  
  angular
    .module('RDash')
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {    
      // Now set up the states
      $stateProvider
        .state('main.orderForm.create', {
          url: "/create",
          controller: ['$scope', 'orderFormFormValidator', function($scope, orderFormFormValidator) {
            $scope.validate = orderFormFormValidator.validate;
          }],
          template: '\
          <entity-form \
            error=error \
            cancel=back \
            validate=validate \
            submit=onAdd \
            template-form="order-form-form" \
            action="create"> \
          </entity-form>'
        })
        .state('main.orderForm.edit', {
          url: "/edit/:id",
          controller: ['$scope', '$stateParams', 'orderFormFormValidator', function($scope, $stateParams, orderFormFormValidator) {
            $scope.validate = orderFormFormValidator.validate;
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
            template-form="order-form-form" \
            action="update"> \
          </entity-form>'
        });
    }]);
})();
