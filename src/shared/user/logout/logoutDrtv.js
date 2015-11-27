;(function() {
  "use strict";

  angular
    .module('RDash')
    .directive('logout', function() {
      return {
        restrict: 'A',
        controller: 'logoutController',
        templateUrl: 'shared/user/logout/logoutTmpl.html'
      };
    });

})();
