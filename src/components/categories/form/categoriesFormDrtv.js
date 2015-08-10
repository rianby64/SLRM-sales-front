;(function() {
  "use strict";
  
  angular
    .module('RDash')
    .directive('categoriesForm', function() {
      return {
        restrict: 'E',
        scope: { 
          entity: '='
        },
        templateUrl: 'components/categories/form/categoriesFormTmpl.html'
      };
    });
  
})();