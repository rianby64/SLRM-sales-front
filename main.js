;(function() {
  "use strict";
  angular
    .module('SLRM', ['ui.router'])
    .config(function($logProvider) {
      $logProvider.debugEnabled(true);
    });

})();