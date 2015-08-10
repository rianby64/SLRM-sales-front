;(function() {
  "use strict";
  
  angular
    .module('RDash')
    .directive('categoriesTableHeader', function() {
      return {
        replace: true,
        restrict: 'A',
        scope: { },
        templateUrl: 'components/categories/table/header/categoriesTableHeaderTmpl.html'        
      };
    });
  
})();