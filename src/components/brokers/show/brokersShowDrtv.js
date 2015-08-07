;(function() {
  "use strict";
  
  angular
    .module('RDash')
    .directive('brokersShow', function() {
      return {
        restrict: 'A',
        scope: { 
          entity: '='
        },
        templateUrl: 'components/brokers/show/brokersShowTmpl.html'        
      };
    });
  
})();