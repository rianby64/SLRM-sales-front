;(function() {
  "use strict";
  
  angular
    .module('RDash')
    .directive('goodsTableHeader', function() {
      return {
        replace: true,
        restrict: 'A',
        scope: { },
        templateUrl: 'components/goods/table/header/goodsTableHeaderTmpl.html'        
      };
    });
  
})();