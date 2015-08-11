;(function() {
  "use strict";
  
  angular
    .module('RDash')
    .directive('entityDetail', function() {
      return {
        restrict: 'E',
//        link: function(scope, element, attrs) {
//          console.log(scope, 'in link fn');
//        },
        scope: {
          cancel: '=',
          entity: '='
        },
        controller: 'entityDetailController',
        template: function(elem, attrs) {
          return '<div class="container" ' + attrs.templateDetail + ' entity=entity on-cancel="onCancel"></div>'
        }
      };
    });
  
})();