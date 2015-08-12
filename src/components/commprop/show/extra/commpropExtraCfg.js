;(function() {
  "use strict";
  
  angular
    .module('RDash')
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {    
            
      // Now set up the states
      $stateProvider
        .state('main.commprop.detail.extra', {
          url: "/extra",
          controller: 'commpropExtraController',
          templateUrl: 'components/commprop/show/extra/commpropExtraTmpl.html'
        });
      
    }]);
})();