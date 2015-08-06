;(function() {
  "use strict";
  
  angular
    .module('SLRM')
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