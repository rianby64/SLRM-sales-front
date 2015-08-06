;(function() {
  "use strict";
  
  angular
    .module('SLRM')
    .directive('producersTableHeader', function() {
      return {
        replace: true,
        restrict: 'A',
        scope: { },
        templateUrl: 'components/producers/table/header/producersTableHeaderTmpl.html'        
      };
    });
  
})();