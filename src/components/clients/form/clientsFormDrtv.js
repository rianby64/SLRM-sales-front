;(function() {
  "use strict";
  
  angular
    .module('RDash')
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