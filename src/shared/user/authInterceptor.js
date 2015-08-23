;(function() {
  "use strict";
  
  angular
    .module('RDash')
    .config(['$httpProvider', function($httpProvider) {  
      // alternatively, register the interceptor via an anonymous factory
      $httpProvider.interceptors.push(['$q', '$location', '$injector', httpproviderinterceptor]);
      
      function httpproviderinterceptor($q, $location, $injector) {
        return {
          responseError: function(rejection) {
            if (rejection.status === 401) {
              var $state = $injector.get('$state');
              var next = $location.path();
              $state.go('login', { next: next });
            }
            return $q.reject(rejection);
          }
        };
      }
  }]);
  
})();