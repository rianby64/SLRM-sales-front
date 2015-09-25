;(function() {
  "use strict";  
  
  angular
    .module('RDash')
    .factory('authService', ['$state', '$stateParams', '$q', '$http', function($state, $stateParams, $q, $http) {
    var authService = {},
        user = {},
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
      checked = false;
      if (!checked) {
        return $http.get('/check').then(function(response) {
          console.log(response, 'after check');
          checked = true;
          user = response.data;
          return user; // by http request
        });
      }
      return $q(function(resolve, reject) {
        console.log('resolving');
        resolve(user); // by cache
      });
    }
    
    authService.requestToken = requestToken;
    authService.logout = logout;
    authService.check = check;
    
    return authService;
  }]);
  
})();
