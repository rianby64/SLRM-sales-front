;(function() {
  "use strict";
  angular.module('RDash')
  .filter('goodsphotosreplace', function () {
    return function (text, target, otherProp) {
        return text.replace('static/', '');
    };
  });
})();

