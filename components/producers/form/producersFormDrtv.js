;(function() {
  "use strict";
  
  angular
    .module('SLRM')
    .directive('producersForm', function() {
      return {
        restrict: 'E',
        scope: { 
          entity: '='
        },
        templateUrl: 'components/producers/form/producersFormTmpl.html'        
      };
    });
  
})();