;(function() {
  "use strict";
  
  angular
    .module('RDash')
    .directive('profile', function() {
      return {
        restrict: 'E',
        scope: {
          
        },
        controller: 'profileController',
        templateUrl: 'shared/user/profile/profileTmpl.html'        
      };
    });
  
})();