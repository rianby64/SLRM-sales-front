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
        controller: 'goodsFormController',
        templateUrl: 'components/goods/form/goodsFormTmpl.html'
      };
    });

})();
