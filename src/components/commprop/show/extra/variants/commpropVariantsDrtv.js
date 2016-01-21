;(function() {
  "use strict";

  angular
    .module('RDash')
    .directive('commpropVariants', function() {
      return {
        restrict: 'E',
        scope: {
          variant: '='
        },
        controller: 'commpropVariantsController',
        templateUrl: 'components/commprop/show/extra/variants/commpropVariantsTmpl.html'
      };
    });

})();
