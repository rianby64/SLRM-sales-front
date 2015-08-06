;(function() {
  "use strict";
  
  angular
    .module('SLRM')
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
          return '<div class="container" ' + attrs.templateDetail + ' entity=entity></div><a class="btn btn-default" ng-click="onCancel()">Отмена</a>'
        }
      };
    });
  
})();