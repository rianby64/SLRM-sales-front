;(function() {
  "use strict";
  
  angular
    .module('SLRM')
    .directive('goodsShow', function() {
      return {
        restrict: 'A',
        scope: { 
          entity: '='
        },
        templateUrl: 'components/goods/show/goodsShowTmpl.html'        
      };
    });
  
})();