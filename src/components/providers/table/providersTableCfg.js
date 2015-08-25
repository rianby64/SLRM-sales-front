;(function() {
  "use strict";
  
  angular
    .module('RDash')
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {    
      // Now set up the states
      $stateProvider
        .state('main.providers.show', {
          url: "/show",
          template: '\
          <entity-table \
            entities=entities \
            base="main.providers" \
            template-table-row="providers-table-row" \
            template-table-header="providers-table-header"> \
          </entity-table>'
        })
        .state('main.manufacturers.show', {
          url: "/show",
          template: '\
          <entity-table \
            entities=entities \
            base="main.manufacturers" \
            template-table-row="providers-table-row" \
            template-table-header="providers-table-header"> \
          </entity-table>'
        });
      
    }]);
})();