;(function() {
  "use strict";
  
  angular
    .module('RDash')
    .directive('clientsShow', function() {
      return {
        restrict: 'A',
        scope: { 
          entity: '='
        },
        templateUrl: 'components/clients/show/clientsShowTmpl.html'        
      };
    });
  
})();