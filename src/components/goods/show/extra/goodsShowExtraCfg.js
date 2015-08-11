;(function() {
  "use strict";
  
  angular
    .module('RDash')
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {    
            
      // Now set up the states
      $stateProvider
        .state('main.goods.detail.extra', {
          url: "/extra",
          controller: 'goodsShowExtraController',
          templateUrl: 'components/goods/show/extra/goodsShowExtraTmpl.html'
        });
      
    }]);
})();