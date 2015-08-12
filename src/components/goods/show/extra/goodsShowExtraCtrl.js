;(function() {
  "use strict";
  angular
    .module('RDash')
    .controller('goodsShowExtraController', ['$scope', '$stateParams', 'providersHTTP', 'goodsProvidersHTTP', 'goodsPhotosHTTP', 'Upload', function($scope, $stateParams, providersHTTP, goodsProvidersHTTP, goodsPhotosHTTP, Upload) {
      
      $scope.entry = {};
      $scope.refreshProviders = function(provider) {
        providersHTTP.read().success(function(response) {
          $scope.providers = response;
        });
      };
      $scope.progressPercentage = 0;
      $scope.uploadingFile = false;
      
      $scope.price = 0;
      $scope.providerId = 0;
      $scope.goodId = parseInt($stateParams.id, 10);
      goodsProvidersHTTP.setGoodId($scope.goodId);
      goodsPhotosHTTP.setGoodId($scope.goodId);
      
      $scope.entriesGoodsProviders = [];
      $scope.entriesGoodsPhotos = [];
      
      goodsProvidersHTTP.read().success(function(response) {
        $scope.entriesGoodsProviders = response;
      });
      
      goodsPhotosHTTP.read().success(function(response) {
        $scope.entriesGoodsPhotos = response;
      });
      
      $scope.$watch('photo', function(photo) {
        if (photo) {
          $scope.onAddGoodsPhotos(photo);
        }
      });
      
      $scope.progressPercentage = 0;
      $scope.uploadingFile = false;
      $scope.onAddGoodsPhotos = function(file) {
        $scope.uploadingFile = true;
        Upload.upload({
          url: '/api/goods/' + $scope.goodId + '/photos/upload',
          fields: { 'goodId': $scope.goodId },
          file: file
        }).progress(function (evt) {
          var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
          $scope.progressPercentage = progressPercentage;
        }).success(function (data, status, headers, config) {
          $scope.uploadingFile = false;
          $scope.entriesGoodsPhotos.push(data);
        });
      };
      
      
      $scope.onRemoveGoodsPhotos = function(entry) {
        goodsPhotosHTTP.remove(entry).success(function(response) {
          var l = $scope.entriesGoodsPhotos.length, i, found = false;
          for (i = 0; i < l; i++) {
            if ($scope.entriesGoodsPhotos[i].id === entry.id) {
              found = true;
              break;
            }
          };
          if (found)
            $scope.entriesGoodsPhotos.splice(i, 1);
        });
      };
      
      
      $scope.onAddGoodsProviders = function() {
        var entry = {
          price: $scope.price,
          providerId: $scope.entry.provider.id,
          goodId: $scope.goodId
        };
        
        goodsProvidersHTTP.add(entry).success(function(response) {
          response.provider = {
            legal_name: $scope.entry.provider.legal_name
          };
          $scope.entriesGoodsProviders.push(response);
          $scope.entry = {};
          $scope.price = 0;
          $scope.providerId = 0;
        });
        
      };
      
      $scope.onRemoveGoodsProviders = function(entry) {
        goodsProvidersHTTP.remove(entry).success(function(response) {
          var l = $scope.entriesGoodsProviders.length, i, found = false;
          for (i = 0; i < l; i++) {
            if ($scope.entriesGoodsProviders[i].id === entry.id) {
              found = true;
              break;
            }
          };
          if (found)
            $scope.entriesGoodsProviders.splice(i, 1);
        });
      };
      
    }]);
})();