;(function() {
  "use strict";
  angular
    .module('RDash')
    .controller('entityController', ['$scope', '$state', 'entityManager', function($scope, $state, entityManager) {

      $scope.entities = $scope.entities || entityManager.entities;
      $scope.title = $scope.title || '';

      $scope.message = $scope.message || function() { console.error('entityController>>message empty'); };
      $scope.error = $scope.error || function() { console.error('entityController>>error empty'); };

      $scope.add = $scope.add || function dummyAdd() { console.error('entityController>>add empty'); };
      $scope.read = $scope.read || function dummyRead() { console.error('entityController>>read empty'); };
      $scope.remove = $scope.remove || function dummyRemove() { console.error('entityController>>remove empty'); };
      $scope.update = $scope.update || function dummyUpdate() { console.error('entityController>>update empty'); };

      $scope.back = function() {
        $scope.message();
        $state.go($scope.base + '.show');
      };

      function scrollAndHighligh(entity) {
        setTimeout(function() {
          if ($( "#entity-row-" + entity.id ).offset()) {
            $('html,body').animate({
              scrollTop: $( "#entity-row-" + entity.id ).offset().top
            });
          }
          $( "#entity-row-" + entity.id ).effect( "highlight", {}, 1500 );
        }, 200);
      }

      function notifyError(reason) {
        $scope.error(reason);
      }

      function notifyRead(entities) {
        $scope.entities = entities;
      }

      function notifyAdd(entity) {
        $scope.entities.splice(0, 0, entity);
        $scope.back();
        scrollAndHighligh(entity);
      }

      function notifyUpdate(entity) {
        var l = $scope.entities.length, i;
        for (i = 0; i < l; i++) {
          if ($scope.entities[i].id === entity.id) {
            $scope.entities[i] = entity;
            break;
          }
        }
        $scope.back();
        scrollAndHighligh(entity);
      }

      function notifyRemove(entity) {
        var l = $scope.entities.length, i, found = false;
        for (i = 0; i < l; i++) {
          if ($scope.entities[i].id === entity.id) {
            found = true;
            break;
          }
        };
        if (found)
          $scope.entities.splice(i, 1);
      }

      entityManager.setupManager({
        notifyError: notifyError,
        notifyAdd: notifyAdd,
        notifyRead: notifyRead,
        notifyUpdate: notifyUpdate,
        notifyRemove: notifyRemove,
        add: $scope.add,
        read: $scope.read,
        remove: $scope.remove,
        update: $scope.update
      });

      $scope.onAdd = entityManager.add;
      $scope.onLoad = entityManager.load;
      $scope.onUpdate = entityManager.update;
      $scope.onRemove = entityManager.remove;

      entityManager.init();
    }
  ]);
})();
