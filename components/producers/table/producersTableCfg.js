;(function() {
  "use strict";
  
  angular
    .module('SLRM')
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {    
      // Now set up the states
      $stateProvider
        .state('main.producers.show', {
          url: "/show",
          template: '\
          <entity-table \
            entities=entities \
            base="main.producers" \
            template-table-row="producers-table-row" \
            template-table-header="producers-table-header"> \
          </entity-table>'
        });
      
    }]);
})();