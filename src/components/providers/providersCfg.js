;(function() {
  "use strict";
  
  angular
    .module('RDash')
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
            base="main.providers" \
            title="Поставщики"> \
          </entity>'
        })
        .state('main.manufacturers', {
          abstract: true,
          url: "/manufacturers",
          controller: 'manufacturersController',
          template: '\
          <entity \
            read=read \
            add=add \
            remove=remove \
            update=update \
            base="main.manufacturers" \
            title="Производители"> \
          </entity>'
        });
      
    }]);
})();