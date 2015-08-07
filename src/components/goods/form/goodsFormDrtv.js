;(function() {
  "use strict";
  
  angular
    .module('RDash')
    .directive('goodsForm', function() {
      return {
        restrict: 'E',
        scope: { 
          entity: '='
        },
        templateUrl: 'components/goods/form/goodsFormTmpl.html'        
      };
    });
  
})();