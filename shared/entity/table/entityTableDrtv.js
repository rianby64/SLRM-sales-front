;(function() {
  "use strict";
  
  angular
    .module('SLRM')
    .directive('entityTable', function() {
      return {
        restrict: 'E',
        scope: {
          entities: '=',
          base: '@'
        },
        controller: 'entityTableController',
        template: function(elem, attrs) {
          return '<a ui-sref="{{base}}.create" class="btn btn-primary">Добавить</a> \
<table class="table"> \
  <thead> \
    <tr ' + attrs.templateTableHeader + '></tr>\
  </thead> \
  <tbody> \
    <tr ' + attrs.templateTableRow + ' ng-repeat="entity in entities" id="entity-row-{{entity.id}}" entity=entity base="base" on-remove=onRemove> \
    </tr> \
  </tbody> \
</table>'; 
        }
      };
    });
  
})();