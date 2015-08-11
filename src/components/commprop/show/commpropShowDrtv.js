;(function() {
  "use strict";
  
  angular
    .module('RDash')
    .directive('commpropShow', function() {
      return {
        restrict: 'A',
        scope: { 
          entity: '=',
          onCancel: '='
        },
        templateUrl: 'components/commprop/show/commpropShowTmpl.html'        
      };
    });
  
})();