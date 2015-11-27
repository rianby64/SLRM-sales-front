;(function() {
  "use strict";

  angular
    .module('RDash')
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

      // Now set up the states
      $stateProvider
        .state('main.brokers', {
          abstract: true,
          url: "/brokers",
          controller: 'brokersController',
          template: '\
          <entity \
            read=read \
            add=add \
            remove=remove \
            update=update \
            base="main.brokers" \
            title="Посредники"> \
          </entity>'
        });

    }]);
})();
