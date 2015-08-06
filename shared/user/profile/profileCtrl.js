;(function() {
  "use strict";
  
  angular
    .module('SLRM')
    .controller('profileController', ['$scope', 'authService', function($scope, authService) {
      authService.check('profile');
    }]);
  
})();