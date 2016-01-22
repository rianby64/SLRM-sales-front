;(function() {
  "use strict";

  angular
    .module('RDash')
    .directive('commpropGoods', function() {
      return {
        restrict: 'E',
        scope: {
          variant: '='
        },
        controller: 'commpropGoodsController',
        templateUrl: 'components/commprop/show/extra/goods/commpropGoodsTmpl.html'
      };
    });

})();
