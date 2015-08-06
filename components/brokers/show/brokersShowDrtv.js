;(function() {
  "use strict";
  
  angular
    .module('SLRM')
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