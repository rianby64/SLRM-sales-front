;(function() {
  "use strict";
  
  angular
    .module('SLRM')
    .directive('clientsTableHeader', function() {
      return {
        replace: true,
        restrict: 'A',
        scope: { },
        templateUrl: 'components/clients/table/header/clientsTableHeaderTmpl.html'        
      };
    });
  
})();