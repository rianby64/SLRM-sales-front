;(function() {
  "use strict";
  
  angular
    .module('SLRM')
    .directive('goodsTableHeader', function() {
      return {
        replace: true,
        restrict: 'A',
        scope: { },
        templateUrl: 'components/goods/table/header/goodsTableHeaderTmpl.html'        
      };
    });
  
})();