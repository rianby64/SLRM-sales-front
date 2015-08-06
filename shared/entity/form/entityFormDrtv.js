;(function() {
  "use strict";
  
  angular
    .module('SLRM')
    .directive('entityForm', function() {
      return {
        restrict: 'E',
        scope: {
          validate: '=',
          submit: '=',
          cancel: '=',
          error: '=',
          entity: '='
        },
        controller: 'entityFormController',
        template: function(elem, attrs) {
          return '<form ng-submit="onSubmit()"> \
  <' + attrs.templateForm + ' entity=entity></' + attrs.templateForm + '> \
  <button type="submit" class="btn btn-primary">Отправить</button> \
  <a class="btn btn-default" ng-click="onCancel()">Отмена</a> \
</form>'
        }
      };
    });
  
})();