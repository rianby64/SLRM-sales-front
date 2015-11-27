;(function() {
  "use strict";

  angular
    .module('RDash')
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
      // Now set up the states
      $stateProvider
        .state('admin', {
          url: "/admin",
          template: '<admin></admin>'
        });

    }]);
})();
