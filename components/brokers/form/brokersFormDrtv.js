;(function() {
  "use strict";
  
  angular
    .module('SLRM')
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