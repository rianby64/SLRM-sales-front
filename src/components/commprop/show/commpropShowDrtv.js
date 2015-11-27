;(function() {
  "use strict";

  angular
    .module('RDash')
    .directive('commpropShow', function() {
      return {
        restrict: 'A',
        scope: {
          entity: '=',
          onCancel: '='
        },
        controller: 'commpropShowController',
        templateUrl: 'components/commprop/show/commpropShowTmpl.html'
      };
    });

})();
