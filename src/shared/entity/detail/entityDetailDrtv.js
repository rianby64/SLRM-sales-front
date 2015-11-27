;(function() {
  "use strict";

  angular
    .module('RDash')
    .directive('entityDetail', function() {
      return {
        restrict: 'E',
        scope: {
          cancel: '=',
          entity: '='
        },
        controller: 'entityDetailController',
        template: function(elem, attrs) {
          return '<div ' + attrs.templateDetail + ' entity=entity on-cancel="onCancel"></div>'
        }
      };
    });

})();
