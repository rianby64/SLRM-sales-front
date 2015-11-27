;(function() {
  "use strict";

  angular
    .module('RDash')
    .directive('entity', function() {
      return {
        restrict: 'E',
        scope: {
          add: '=', read: '=', remove: '=', update: '=', base: '@', title: '@'
        },
        controller: 'entityController',
        templateUrl: 'shared/entity/entityTmpl.html'
      };
    });

})();
