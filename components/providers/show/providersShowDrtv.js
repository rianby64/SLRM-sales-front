;(function() {
  "use strict";
  
  angular
    .module('SLRM')
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