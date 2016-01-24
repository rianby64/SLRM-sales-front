;(function() {
  "use strict";
  
  angular
    .module('RDash')
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {    
            
      // Now set up the states
      $stateProvider
        .state('main.orderForm', {
          abstract: true,
          url: "/orderform",
          controller: 'orderFormController',
          template: '\
          <entity \
            read=read \
            update=update \
            base="main.orderForm" \
            title="Бланк заказа"> \
          </entity>'
        });
      
    }]);
})();
