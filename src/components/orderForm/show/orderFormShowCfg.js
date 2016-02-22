;(function() {
  "use strict";
  
  angular
    .module('RDash')
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {    
            
      // Now set up the states
      $stateProvider
        .state('main.orderForm.edit.detail', {
          url: "/detail",
          controller: ['$scope', '$stateParams', function($scope, $stateParams) {
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
          <entity-detail \
            cancel=back \
            entity=entity \
            template-detail="order-form-show"> \
          </entity-detail>'
        });
      
    }]);
})();
