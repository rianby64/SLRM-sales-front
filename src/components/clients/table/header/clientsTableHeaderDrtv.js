;(function() {
  "use strict";
  
  angular
    .module('RDash')
    .directive('clientsTableHeader', function() {
      return {
        replace: true,
        restrict: 'A',
        scope: { },
        templateUrl: 'components/clients/table/header/clientsTableHeaderTmpl.html'        
      };
    });
  
})();