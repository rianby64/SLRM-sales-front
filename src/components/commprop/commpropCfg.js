;(function() {
  "use strict";
  
  angular
    .module('RDash')
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {    
            
      // Now set up the states
      $stateProvider
        .state('main.commprop', {
          abstract: true,
          url: "/commprop",
          controller: 'commpropController',
          template: '\
          <entity \
            read=read \
            add=add \
            remove=remove \
            update=update \
            base="main.commprop" \
            title="Коммерческие предложения"> \
          </entity>'
        });
    }]);
})();