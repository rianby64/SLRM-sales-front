;(function() {
  "use strict";

  angular
    .module('RDash')
    .directive('commpropVariants', function() {
      return {
        restrict: 'E',
        scope: {
          variant: '=',
          onRemove: '='
        },
        controller: 'commpropVariantsController',
        templateUrl: 'components/commprop/show/extra/variants/commpropVariantsTmpl.html'
      };
    });

})();
