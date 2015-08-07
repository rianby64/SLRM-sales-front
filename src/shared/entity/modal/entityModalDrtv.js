;(function() {
  "use strict";
  
  angular
    .module('RDash')
    .directive('entityModal', function() {
      return {
        restrict: 'E',
        scope: {
          submit: '=',
          entity: '='
        },
        controller: 'entityModalController',
        template: function(elem, attrs) {
          return '<button type="button" class="btn btn-default glyphicon glyphicon-remove" data-toggle="modal" data-target="#entityShow-delete{{entity.id}}"></button> \
<div class="modal fade" id="entityShow-delete{{entity.id}}" tabindex="-1" role="dialog" aria-labelledby="entityShow-delete{{entity.id}}Label"> \
  <div class="modal-dialog" role="document"> \
    <div class="modal-content"> \
      <div class="modal-header"> \
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button> \
        <h4 class="modal-title" id="entityShow-delete{{entity.id}}Label">Удалить?</h4> \
      </div> \
      <div class="modal-body"> \
        <div ' + attrs.templateDetail + ' entity=entity></div> <!-- @show --> \
      </div> \
      <div class="modal-footer"> \
        <button type="button" class="btn btn-default" data-dismiss="modal">Отмена</button> \
        <button type="button" class="btn btn-primary" ng-click="onSubmit(entity)">Удалить!</button> \
      </div> \
    </div> \
  </div> \
</div>'
        }
      };
    });
  
})();