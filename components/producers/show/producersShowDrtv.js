;(function() {
  "use strict";
  
  angular
    .module('SLRM')
    .directive('producersShow', function() {
      return {
        restrict: 'A',
        scope: { 
          entity: '='
        },
        templateUrl: 'components/producers/show/producersShowTmpl.html'        
      };
    });
  
})();