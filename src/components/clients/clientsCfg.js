;(function() {
  "use strict";
  
  angular
    .module('RDash')
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {    
            
      // Now set up the states
      $stateProvider
        .state('main.client', {
          abstract: true,
          url: "/client",
          controller: 'clientsController',
          template: '\
          <entity \
            read=read \
            add=add \
            remove=remove \
            update=update \
            base="main.client" \
            title="Клиенты"> \
          </entity>'
        });
      
    }]);
})();