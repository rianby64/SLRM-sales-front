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
          .state('authenticate', {
            url: "/authenticate/:token/:uid",
            template: 'authenticating... soon you will be redirected',
            controller: ['$scope', '$state', '$stateParams', '$http', function($scope, $state, $stateParams, $http) {
              console.log($stateParams);
              $http.post('/login', $stateParams).then(function (response) {
                $state.go('main');
              });
            }]
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
          });

        $urlRouterProvider.otherwise(function($injector, $location){
          if (($location.path() === '/') || ($location.path() === '')) {
            return '/main';
          }
          return '/not-found';
        });
      
    }
]);