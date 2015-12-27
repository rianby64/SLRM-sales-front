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
          <commprop-filter search-manager=manager></commprop-filter> \
          <entity-table \
            search-manager=manager \
            entities=entities \
            base="main.commprop" \
            template-table-row="commprop-table-row" \
            template-table-header="commprop-table-header"> \
          </entity-table>'
        });
      
    }]);
})();