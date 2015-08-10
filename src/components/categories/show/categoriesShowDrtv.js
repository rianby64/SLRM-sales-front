;(function() {
  "use strict";
  
  angular
    .module('RDash')
    .directive('categoriesShow', function() {
      return {
        restrict: 'A',
        scope: { 
          entity: '='
        },
        templateUrl: 'components/categories/show/categoriesShowTmpl.html'        
      };
    });
  
})();