;(function() {
  "use strict";
  
  angular
    .module('SLRM')
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