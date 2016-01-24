;(function() {
  "use strict";

  angular
    .module('RDash')
    .directive('entityTable', function() {
      return {
        restrict: 'E',
        scope: {
          searchManager: '=',
          entities: '=',
          theme: '@',
          base: '@',
          title: '@'
        },
        controller: 'entityTableController',
        template: function(elem, attrs) {
          return '<div ng-if="title"><hr>{{title}}</div> \
<div ng-hide="searchManager.origin.add.name===\'dummyAdd\'" class="row form-group text-right"><a ui-sref="{{base}}.create" class="btn btn-primary">Добавить</a></div> \
<search manager=searchManager></search> \
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
