;(function() {
  "use strict";
  
  angular
    .module('RDash')
    .directive('providersShow', function() {
      return {
        restrict: 'A',
        scope: { 
          entity: '='
        },
        templateUrl: 'components/providers/show/providersShowTmpl.html'        
      };
    });
  
})();