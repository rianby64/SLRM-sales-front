;(function() {
  "use strict";
  
  angular
    .module('RDash')
    .directive('providersTableHeader', function() {
      return {
        replace: true,
        restrict: 'A',
        scope: { },
        templateUrl: 'components/providers/table/header/providersTableHeaderTmpl.html'        
      };
    });
  
})();