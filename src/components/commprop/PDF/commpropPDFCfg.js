;(function() {
  "use strict";

  angular
    .module('RDash')
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

      // Now set up the states
      $stateProvider
        .state('commpropPDF', {
          url: "/commpropPDF/:id",
          controller: 'commpropPDFcontroller',
          templateUrl: 'components/commprop/PDF/commpropPDF_KP_Tmpl.html'
        });
      
      $stateProvider
        .state('commpropPDF_BZ', {
          url: "/commpropPDF/BZ/:id",
          controller: 'commpropPDFcontroller',
          templateUrl: 'components/commprop/PDF/commpropPDF_BZ_Tmpl.html'
        });

    }]);
})();
