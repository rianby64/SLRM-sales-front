;(function() {
  "use strict";

  angular
    .module('RDash')
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
