'use strict';

/**
 * Route configuration for the RDash module.
 */
angular.module('RDash').config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

        // Now set up the states
        $stateProvider
          .state('not-found', {
            url: "/not-found",
            template: "<page-error></page-error>"
          })
          .state('login', {
            url: "/login/next::next",
            template: "<login restore-sref='restore'></login>"
          })
          .state('restore', {
            url: "/restore",
            template: "<restore></restore>"
          })
          .state('profile', {
            url: "/profile",
            template: "<profile></profile>"
          })
          .state('main', {
            url: "/main",
            templateUrl: 'templates/main.html',
            controller: "mainCtrl"
          })
          .state('main.test', {
            url: "/test",
            templateUrl: 'templates/tables.html'
          });

        $urlRouterProvider.otherwise(function($injector, $location){
          if (($location.path() === '/') || ($location.path() === '')) {
            return '/main';
          }
          return '/not-found';
        });
      
    }
]);