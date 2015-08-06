;(function() {
  "use strict";
  
  angular
    .module('SLRM')
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