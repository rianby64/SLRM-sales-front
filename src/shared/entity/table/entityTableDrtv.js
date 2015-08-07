;(function() {
  "use strict";
  
  angular
    .module('RDash')
    .directive('entityTable', function() {
      return {
        restrict: 'E',
        scope: {
          entities: '=',
          base: '@'
        },
        controller: 'entityTableController',
        template: function(elem, attrs) {
          return '\
<table class="table table-striped" id="entity-table"> \
  <thead> \
    <tr ' + attrs.templateTableHeader + '></tr>\
  </thead> \
  <tbody> \
    <tr ' + attrs.templateTableRow + ' ng-repeat="entity in entities" id="entity-row-{{entity.id}}" entity=entity base="base" on-remove=onRemove> \
    </tr> \
  </tbody> \
</table> \
<div class="container" style="margin-bottom:10px;"><div class="row text-center"><a ui-sref="{{base}}.create" class="btn btn-primary">Добавить</a></div></div>'; 
        }
      };
    });
  
})();