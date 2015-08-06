;(function() {
  "use strict";
  
  angular
    .module('SLRM')
    .directive('clientsForm', function() {
      return {
        restrict: 'E',
        scope: { 
          entity: '='
        },
        templateUrl: 'components/clients/form/clientsFormTmpl.html'        
      };
    });
  
})();