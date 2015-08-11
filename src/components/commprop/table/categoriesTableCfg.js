;(function() {
  "use strict";
  
  angular
    .module('RDash')
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {    
      // Now set up the states
      $stateProvider
        .state('main.commprop.show', {
          url: "/show",
          template: '\
          <entity-table \
            entities=entities \
            base="main.commprop" \
            template-table-row="commprop-table-row" \
            template-table-header="commprop-table-header"> \
          </entity-table>'
        });
      
    }]);
})();