;(function() {
  "use strict";

  angular
    .module('RDash')
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

      // Now set up the states
      $stateProvider
        .state('orderFormPDF', {
          url: "/orderFormPDF/:id",
          controller: 'orderFormPDFcontroller',
          templateUrl: 'components/orderForm/PDF/orderFormPDFTmpl.html'
        });

    }]);
})();
