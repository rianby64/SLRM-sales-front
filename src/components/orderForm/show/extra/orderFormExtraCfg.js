;(function() {
  "use strict";

  angular
    .module('RDash')
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

      // Now set up the states
      $stateProvider
        .state('main.orderForm.edit.detail.extra', {
          url: "/extra",
          controller: 'orderFormExtraController',
          templateUrl: 'components/orderForm/show/extra/orderFormExtraTmpl.html'
        });

    }]);
})();
