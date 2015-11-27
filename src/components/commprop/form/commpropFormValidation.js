;(function() {
  "use strict";

  angular
    .module('RDash')
    .factory('commpropFormValidator', [
    '$q', 'authService',
    function($q, authService) {
      var formValidator = {}, manager;
      authService.check().then(function(user) {
        manager = user;
      });
      function validate(commprop) {


        return $q(function(resolve, reject) {
          var reason = {
            valid: true
          };


          var form = angular.copy(commprop);
          form.author = manager.name;

          delete form.client;
          delete form.broker;

          if (commprop.client) { form.clientId = commprop.client.id; }
          if (commprop.broker) { form.brokerId = commprop.broker.id; }

          if (reason.valid) {
            resolve(form);
          }
          reject(reason);
        });
      };

      formValidator.validate = validate;
      return formValidator;
    }]);

})();
