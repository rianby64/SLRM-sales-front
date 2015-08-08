;(function() {
  "use strict";
  
  angular
    .module('RDash')
    .directive('datetimepicker', function() {
      return {
        require: '?ngModel',
        restrict: 'A',
        scope: {
          ngModel: '=',
          format: '@'
        },
        controller: ['$scope', function($scope) {
          $scope.elem = {};
          $scope.setElement = function(elem) {
            $scope.elem = elem;
          };
          $scope.setDatetime = function(value) {
            if (value === null) {
              $scope.ngModel = '';
              return;
            }
            $scope.ngModel = new Date(value);
          };
          $scope.$watch('ngModel', function(value) {
            if (value) {
              $scope.elem.data("DateTimePicker").date(value);
            }
          });
        }],
        link: function(scope, elem, attrs) {
          elem.datetimepicker({
            format: scope.format
          });
          scope.setElement(elem);
          elem.on('blur', function (event) {
            event.preventDefault();
            if (elem.data("DateTimePicker").date()) {
              scope.setDatetime(elem.data("DateTimePicker").date().toDate());
            }
            else {
              scope.setDatetime(null);
            }
          });
          
        }
      };
    });
  
})();