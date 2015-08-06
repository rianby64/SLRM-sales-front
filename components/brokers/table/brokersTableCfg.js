;(function() {
  "use strict";
  
  angular
    .module('SLRM')
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {    
      // Now set up the states
      $stateProvider
        .state('main.brokers.show', {
          url: "/show",
          template: '\
          <entity-table \
            entities=entities \
            base="main.brokers" \
            template-table-row="brokers-table-row" \
            template-table-header="brokers-table-header"> \
          </entity-table>'
        });
      
    }]);
})();