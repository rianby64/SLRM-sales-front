;(function() {
  "use strict";
  
  angular
    .module('SLRM')
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {    
            
      // Now set up the states
      $stateProvider
        .state('main.providers', {
          abstract: true,
          url: "/providers",
          controller: 'providersController',
          template: '\
          <entity \
            read=read \
            add=add \
            remove=remove \
            update=update \
            base="main.providers"> \
          </entity>'
        });
      
    }]);
})();