;(function() {
  "use strict";

  angular
    .module('RDash')
    .directive('brokersTableHeader', function() {
      return {
        replace: true,
        restrict: 'A',
        scope: { },
        templateUrl: 'components/brokers/table/header/brokersTableHeaderTmpl.html'
      };
    });

})();
