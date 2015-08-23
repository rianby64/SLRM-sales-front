;(function() {
  "use strict";
  
  angular
    .module('RDash')
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {    
      // Now set up the states
      $stateProvider
        .state('admin.show', {
          url: "/show",
          template: '\
          <entity-table \
            entities=entities \
            base="admin" \
            template-table-row="admin-table-row" \
            template-table-header="admin-table-header"> \
          </entity-table>'
        });
      
    }]);
})();