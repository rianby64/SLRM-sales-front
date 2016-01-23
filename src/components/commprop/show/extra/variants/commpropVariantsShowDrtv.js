;(function() {
  "use strict";

  angular
    .module('RDash')
    .directive('commpropVariantsShow', function() {
      return {
        restrict: 'A',
        scope: {
          entity: '='
        },
        template: 'Вариант {{entity.name}}'
      };
    });

})();
