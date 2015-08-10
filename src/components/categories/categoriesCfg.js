;(function() {
  "use strict";
  
  angular
    .module('RDash')
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {    
            
      // Now set up the states
      $stateProvider
        .state('main.categories', {
          abstract: true,
          url: "/categories",
          controller: 'categoriesController',
          template: '\
          <entity \
            read=read \
            add=add \
            remove=remove \
            update=update \
            base="main.categories" \
            title="Категории"> \
          </entity>'
        });
      
    }]);
})();