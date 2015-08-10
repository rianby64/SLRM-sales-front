;(function() {
  "use strict";
  
  angular
    .module('RDash')
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {    
      // Now set up the states
      $stateProvider
        .state('main.categories.show', {
          url: "/show",
          template: '\
          <entity-table \
            entities=entities \
            base="main.categories" \
            template-table-row="categories-table-row" \
            template-table-header="categories-table-header"> \
          </entity-table>'
        });
      
    }]);
})();