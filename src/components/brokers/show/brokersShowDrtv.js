;(function() {
  "use strict";

  angular
    .module('RDash')
    .directive('brokersShow', function() {
      return {
        restrict: 'A',
        scope: {
          entity: '=',
          onCancel: '='
        },
        templateUrl: 'components/brokers/show/brokersShowTmpl.html'
      };
    });

})();
