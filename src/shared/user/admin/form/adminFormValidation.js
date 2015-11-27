;(function() {
  "use strict";

  angular
    .module('RDash')
    .factory('adminFormValidator', [
    '$q',
    function($q) {
      var formValidator = {};

      function generateUUID(){
        var d = new Date().getTime();
        var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
          var r = (d + Math.random()*16)%16 | 0;
          d = Math.floor(d/16);
          return (c=='x' ? r : (r&0x3|0x8)).toString(16);
        });
        return uuid;
      }

      function validate(user) {
        return $q(function(resolve, reject) {
          var reason = {
            valid: true
          };

          if (reason.valid) {
            var validUser = angular.copy(user);
            validUser.uuid = generateUUID();
            resolve(validUser);
          }
          reject(reason);
        });
      };

      formValidator.validate = validate;
      return formValidator;
    }]);

})();
