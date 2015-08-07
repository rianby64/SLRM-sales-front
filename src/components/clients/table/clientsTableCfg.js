;(function() {
  "use strict";
  
  angular
    .module('RDash')
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {    
      // Now set up the states
      $stateProvider
        .state('main.client.show', {
          url: "/show",
          template: '\
          <entity-table \
            entities=entities \
            base="main.client" \
            template-table-row="clients-table-row" \
            template-table-header="clients-table-header"> \
          </entity-table>'
        });
      
    }]);
})();