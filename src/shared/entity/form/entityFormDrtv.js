;(function() {
  "use strict";

  angular
    .module('RDash')
    .directive('entityForm', function() {
      return {
        restrict: 'E',
        scope: {
          validate: '=',
          action: '@',
          submit: '=',
          cancel: '=',
          error: '=',
          entity: '='
        },
        controller: 'entityFormController',
        template: function(elem, attrs) {
          return '<form ng-submit="onSubmit()"> \
  <' + attrs.templateForm + ' entity=entity></' + attrs.templateForm + '> \
  <button type="submit" class="btn btn-primary">{{textSubmit}}</button> \
  <a class="btn btn-default" ng-click="onCancel()">Отмена</a> \
</form>'
        }
      };
    });

})();
