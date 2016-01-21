;(function() {
  "use strict";
  
  angular
    .module('RDash')
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {    
      // Now set up the states
      $stateProvider
        .state('main.orderForm.show', {
          url: "/show",
          template: '\
          <entity-table \
            entities=entities \
            base="main.orderForm" \
            template-table-row="order-form-table-row" \
            template-table-header="order-form-table-header"> \
          </entity-table>'
        });
      
    }]);
})();
