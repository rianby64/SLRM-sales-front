;(function() {
  "use strict";
  
  angular
    .module('RDash')
    .factory('authService', ['$state', '$stateParams', '$q', '$http', function($state, $stateParams, $q, $http) {
    var authService = {},
        token = false,
        LOGIN_UI_REF = 'login',
        MAIN_UI_REF = 'main',
        notifyLogin = function() { console.error('define a notify login'); },
        notifyLogout = function() { console.error('define a notify logout'); };
    
    function check(next) {
      return $q(function(resolve, reject) {
        var next_ = next || MAIN_UI_REF;
        if (!authService.hasToken()) {
          $state.go(LOGIN_UI_REF, { next: next_ });
          reject();
        }
        resolve();
      });
    }
    
    function login(credentials) {
      return $q(function(resolve, reject) {
        var next = $stateParams.next,
            reason = {
              valid: false,
              username: ['cannot authorizate']
            };
        
        $http
          .post("/api/auth", credentials)
          .success(function(response) {
            
            // < BE CAREFUL! HERE WE EXTRACT THE TOKEN'S VALUE>
            authService.setToken(response.success);
            // <BE CAREFUL! HERE WE EXTRACT THE TOKEN'S VALUE />
            
            $state.go(next);
            resolve(credentials);
            notifyLogin();
          
          }).error(function(response) {
            reject(response);
          });
        
        
      });
    }
    function onLogin(notify) {
      notifyLogin = notify;
    }
    
    function logout() {
      authService.clearToken();
      authService.check();
      notifyLogout();
    }
    function onLogout(notify) {
      notifyLogout = notify;
    }
    
    function hasToken () {
      if (localStorage.getItem('token')) { return true; }
      return !!token;
    }
    
    function clearToken() {
      localStorage.removeItem('token');
      token = undefined;
    }
    
    function setToken(new_token) {
      localStorage.setItem('token', new_token);
      token = new_token;
    }
    
    function getToken() {
      if (!token) {
        var new_token = localStorage.getItem('token');
        if (new_token) {
          token = new_token;
        }
      }
      return token;
    }
    
    authService.login = login;
    authService.onLogin = onLogin;
    authService.logout = logout;
    authService.onLogout = onLogout;
      
    authService.check = check;
    authService.hasToken = hasToken;
    authService.clearToken = clearToken;
    authService.setToken = setToken;
    authService.getToken = getToken;
    return authService;
  }]);
  
})();