;(function() {
  "use strict";
  
  angular
    .module('RDash')
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {    
            
      // Now set up the states
      $stateProvider
        .state('main.orderForm', {
          abstract: true,
          url: "/orderForm",
          controller: 'orderFormController',
          template: '\
          <entity \
            read=read \
            add=add \
            remove=remove \
            update=update \
            base="main.orderForm" \
            title="Категории"> \
          </entity>'
        });
      
    }]);
})();
