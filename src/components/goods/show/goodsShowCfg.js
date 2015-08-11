;(function() {
  "use strict";
  
  angular
    .module('RDash')
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {    
            
      // Now set up the states
      $stateProvider
        .state('main.goods.detail', {
          abstract: true,
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
            cancel=back \
            entity=entity \
            template-detail="goods-show"> \
          </entity-detail>'
        });
      
    }]);
})();