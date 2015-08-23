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
          .state('authenticate', {
            url: "/authenticate/:token/:uid",
            template: 'authenticating... soon you will be redirected',
            controller: ['$scope', '$state', '$stateParams', '$http', function($scope, $state, $stateParams, $http) {
              $http.post('/login', $stateParams).then(function (response) {
                $state.go('main');
              });
            }]
          })
          .state('main', {
            url: "/main",
            templateUrl: 'templates/main.html',
            controller: "mainCtrl"
          });

        $urlRouterProvider.otherwise(function($injector, $location){
          if (($location.path() === '/') || ($location.path() === '')) {
            return '/main';
          }
          return '/not-found';
        });
      
    }
]);