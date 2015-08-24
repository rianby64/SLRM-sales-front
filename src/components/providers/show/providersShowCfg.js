;(function() {
  "use strict";
  
  angular
    .module('RDash')
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {    
            
      // Now set up the states
      $stateProvider
        .state('main.providers.detail', {
          url: "/detail/:id",
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
            type="providers" \
            cancel=back \
            entity=entity \
            template-detail="providers-show"> \
          </entity-detail>'
        })
        .state('main.manufacturers.detail', {
          url: "/detail/:id",
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
            type="manufacturers" \
            cancel=back \
            entity=entity \
            template-detail="providers-show"> \
          </entity-detail>'
        });
      
    }]);
})();