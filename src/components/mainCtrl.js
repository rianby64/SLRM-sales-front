;(function() {
  "use strict";
  angular
    .module('RDash')
    .controller('mainCtrl', ['$scope', 'authService', function($scope, authService) {
      authService.check();
    }
  ]);
})();