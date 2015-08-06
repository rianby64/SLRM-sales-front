;(function() {
  "use strict";
  
  angular
    .module('SLRM')
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {    
      
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
          templateUrl: "components/mainTmpl.html",
          controller: "mainCtrl"
        });
      
      $urlRouterProvider.otherwise(function($injector, $location){
        if (($location.path() === '/') || ($location.path() === '')) {
          return '/main';
        }
        return '/not-found';
      });
      
    }]);
  
})();