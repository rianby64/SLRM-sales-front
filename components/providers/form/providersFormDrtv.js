;(function() {
  "use strict";
  
  angular
    .module('SLRM')
    .directive('providersForm', function() {
      return {
        restrict: 'E',
        scope: { 
          entity: '='
        },
        templateUrl: 'components/providers/form/providersFormTmpl.html'        
      };
    });
  
})();