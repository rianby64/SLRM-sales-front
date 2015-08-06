;(function() {
  "use strict";
  
  angular
    .module('SLRM')
    .directive('header', function() {
      return {
        restrict: 'E',
        scope: {
          profileSref: '@',
          mainSref: '@'
        },
        controller: 'headerController',
        templateUrl: 'shared/header/headerTmpl.html'        
      };
    });
  
})();