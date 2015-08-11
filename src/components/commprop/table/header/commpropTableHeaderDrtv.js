;(function() {
  "use strict";
  
  angular
    .module('RDash')
    .directive('commpropTableHeader', function() {
      return {
        replace: true,
        restrict: 'A',
        scope: { },
        templateUrl: 'components/commprop/table/header/commpropTableHeaderTmpl.html'        
      };
    });
  
})();