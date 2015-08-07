;(function () {
  "use strict";
  
  angular
    .module('RDash')
    .controller('entityModalController', ['$scope', function($scope) {
      $scope.submit = $scope.submit || function() { console.error("entityModalController>>submit empty"); };
      
      $scope.onSubmit = function(entity) {
        $('#entityShow-delete' + entity.id).on('hidden.bs.modal', function() {
          $scope.submit(entity);
        });
        $('#entityShow-delete' + entity.id).modal('hide');
      };
    }]);
  
})();