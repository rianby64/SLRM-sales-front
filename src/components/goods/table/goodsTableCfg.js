;(function() {
  "use strict";
  
  angular
    .module('RDash')
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {    
      // Now set up the states
      $stateProvider
        .state('main.goods.show', {
          url: "/show",
          template: '\
          <entity-table \
            entities=entities \
            base="main.goods" \
            template-table-row="goods-table-row" \
            template-table-header="goods-table-header"> \
          </entity-table>'
        });
      
    }]);
})();