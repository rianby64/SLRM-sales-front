;(function() {
  "use strict";
  
  angular
    .module('SLRM')
    .directive('providersTableHeader', function() {
      return {
        replace: true,
        restrict: 'A',
        scope: { },
        templateUrl: 'components/providers/table/header/providersTableHeaderTmpl.html'        
      };
    });
  
})();