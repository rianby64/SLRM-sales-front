;(function() {
  "use strict";
  
  angular
    .module('RDash')
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {    
            
      // Now set up the states
      $stateProvider
        .state('main.commprop.detail', {
          url: "/detail/:id",
          controller: ['$scope', '$stateParams', function($scope, $stateParams) {
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
              if (!response.status) {
                response.status = '-';
              }
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
            on-update=onUpdate \
            template-detail="commprop-show"> \
          </entity-detail>'
        });
      
    }]);
})();