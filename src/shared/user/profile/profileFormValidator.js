;(function() {
  "use strict";

  angular
    .module('RDash')
    .factory('profileFormValidator', ['$q', profileFormValidator]);

  function profileFormValidator($q) {
    var formValidator = {};

    function validate(user) {
      return $q(function(resolve, reject) {
        var reason = {
          valid: true
        };

        if (reason.valid) {
          var validUser = angular.copy(user);
          resolve(validUser);
        }
        reject(reason);
      });
    };

    formValidator.validate = validate;
    return formValidator;
  }

})();
