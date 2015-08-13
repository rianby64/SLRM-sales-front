;(function() {
  "use strict";
  
  angular
    .module('RDash')
    .directive('commpropForm', function() {
      return {
        restrict: 'E',
        scope: { 
          entity: '='
        },
        controller: 'commpropFormController',
        templateUrl: 'components/commprop/form/commpropFormTmpl.html'
      };
    });
  
})();