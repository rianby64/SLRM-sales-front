;(function() {
  "use strict";
  
  angular
    .module('RDash')
    .directive('messages', function() {
      return {
        restrict: 'E',
        scope: {
          message: '=',
          error: '='
        },
        controller: 'messagesController',
        templateUrl: 'shared/messages/messagesTmpl.html'        
      };
    });
  
})();