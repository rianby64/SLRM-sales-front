;(function() {
  "use strict";
  
  angular
    .module('RDash')
    .directive('orderFormShow', function() {
      return {
        restrict: 'A',
        scope: { 
          entity: '=',
          onCancel: '='
        },
        templateUrl: 'components/orderForm/show/orderFormShowTmpl.html'        
      };
    });
  
})();
