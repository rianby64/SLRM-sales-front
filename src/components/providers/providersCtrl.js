;(function() {
  "use strict";
  angular
    .module('RDash')
    .controller('providersController', ['$scope', 'providersHTTP', function($scope, providersHTTP) {
      $scope.add = providersHTTP.add;
      $scope.read = function read(criteria) {
        var criteria_ = criteria || {};
        criteria_.type = "providers"
        return providersHTTP.read(criteria_);
      };
      $scope.remove = providersHTTP.remove;
      $scope.update = providersHTTP.update;
    }])
    .controller('manufacturersController', ['$scope', 'providersHTTP', function($scope, providersHTTP) {
      
      $scope.add = providersHTTP.add;
      $scope.read = function read(criteria) {
        var criteria_ = criteria || {};
        criteria_.type = "manufacturers"
        return providersHTTP.read(criteria_);
      };
      $scope.remove = providersHTTP.remove;
      $scope.update = providersHTTP.update;
    }]);
})();