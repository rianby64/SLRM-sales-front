;(function() {
  "use strict";
  
  angular
    .module('RDash')
    .controller('profileController', ['$scope', 'authService', function($scope, authService) {
      authService.check('profile');
    }]);
  
})();