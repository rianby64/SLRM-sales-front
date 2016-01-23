;(function() {
  "use strict";

  angular
    .module('RDash')
    .directive('commpropShowModal', function() {
      return {
        restrict: 'A',
        scope: {
          entity: '='
        },
        templateUrl: 'components/commprop/show/commpropShowModalTmpl.html'
      };
    });

})();
