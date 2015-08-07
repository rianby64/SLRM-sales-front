;(function () {
  "use strict";
  
  angular
    .module('RDash')
    .controller('messagesController', [
      '$scope',
    function ($scope) {
      
      $scope.text = $scope.text || '';
      $scope.message = function(text) {
        $scope.text = text;
      };
      
      $scope.error = function error(reason) {
        var errors = [];
        for (var index in reason) {
          if (index === 'valid') { continue; }
          errors = errors.concat(reason[index] || []);
        }
        var text = errors.join(', ');
        $scope.message(text);
      }
      
    }]);
  
})();