;(function() {
  "use strict";

  angular
    .module('RDash')
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
      // Now set up the states
      $stateProvider
          .state('login', {
            url: "/login",
            template: "<login></login>"
          })
          .state('login.success', {
            url: "/success",
            template: "<login-success></login-success>"
          });

    }]);

})();
