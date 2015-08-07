;(function() {
  "use strict";
  
  angular
    .module('RDash')
    .controller('restoreController', ['$scope', '$state', 'authService', function($scope, $state, authService) {
      if (authService.hasToken()) {
        console.log('why you want to restore password if you are in?');
        $state.go('main');
      }
    }]);
  
})();