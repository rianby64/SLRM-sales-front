;(function() {
  "use strict";
  
  angular
    .module('RDash')
    .directive('entityTable', function() {
      return {
        restrict: 'E',
        scope: {
          entities: '=',
          theme: '@',
          base: '@',
          title: '@'
        },
        controller: 'entityTableController',
        template: function(elem, attrs) {
          return '<div ng-if="title"><hr>{{title}}</div> \
<div class="row" ng-if="normalTheme"><div class="container-fluid" style="margin-top:10px;margin-bottom:10px;"><div class="row text-right"><a ui-sref="{{base}}.create" class="btn btn-primary">Добавить</a></div></div></div> \
<table class="table table-striped" id="entity-table"> \
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