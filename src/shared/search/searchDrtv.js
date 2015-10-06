;(function() {
  "use strict";
  
  angular
    .module('RDash')
    .directive('search', function() {
      return {
        restrict: 'E',
        scope: { manager: '=' },
        controller: 'searchController',
        templateUrl: 'shared/search/searchTmpl.html'        
      };
    });
  
})();