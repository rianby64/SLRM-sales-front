;(function() {
  "use strict";
  
  angular
    .module('RDash')
    .directive('brokersForm', function() {
      return {
        restrict: 'E',
        scope: { 
          entity: '='
        },
        templateUrl: 'components/brokers/form/brokersFormTmpl.html'        
      };
    });
  
})();