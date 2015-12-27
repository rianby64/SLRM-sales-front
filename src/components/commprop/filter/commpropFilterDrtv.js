;(function() {
  "use strict";

  angular
    .module('RDash')
    .directive('commpropFilter', function() {
      return {
        restrict: 'E',
        scope: {
          searchManager: '='
        },
        controller: 'commpropFilterController',
        templateUrl: 'components/commprop/filter/commpropFilterTmpl.html'
      };
    });

})();
