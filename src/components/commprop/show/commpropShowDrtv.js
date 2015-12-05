;(function() {
  "use strict";

  angular
    .module('RDash')
    .directive('commpropShow', function() {
      return {
        restrict: 'A',
        scope: {
          entity: '='
        },
        templateUrl: 'components/commprop/show/commpropShowTmpl.html'
      };
    });

})();
