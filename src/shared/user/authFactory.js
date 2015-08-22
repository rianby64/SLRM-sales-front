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
  
  
  angular
    .module('RDash')
    .factory('authService', ['$state', '$stateParams', '$q', '$http', function($state, $stateParams, $q, $http) {
    var authService = {},
        LOGIN_UI_REF = 'login',
        LOGIN_SUCCESS_UI_REF = 'login.success',
        MAIN_UI_REF = 'main',
        checked = false,
        notifyLogin = function() { console.error('define a notify login'); },
        notifyLogout = function() { console.error('define a notify logout'); };
    
    function requestToken(credentials) {
      return $q(function(resolve, reject) {
        var next = $stateParams.next,
            reason = {
              valid: false,
              email: ['cannot authorizate']
            };
        
        $http
          .post("/passwordless", credentials)
          .success(function(response) {
            $state.go(LOGIN_SUCCESS_UI_REF);
            resolve(credentials);
          })
          .error(function(response) {
            reject(response);
          });
        
        
      });
    }
    
    function logout() {
      $http
        .get('/logout')
        .success(function(response) {
          $state.go(LOGIN_UI_REF);
          resolve(response);
        })
        .error(function(response) {
          reject(response);
        });
    }
      
    function check() {
      if (!checked) {
        checked = true;
        $http.get('/check');
      }
    }
      
    authService.requestToken = requestToken;
    authService.logout = logout;
    authService.check = check;
    
    return authService;
  }]);
  
})();
