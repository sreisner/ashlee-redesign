(function() {
  'use strict';

  angular.module('App')
    .controller('ImageModalController', [
      '$scope',
      'CloudinaryService',
      function($scope, cloudinaryService) {
        this.next = function() {
          var nextIndex = $scope.current.sortOrder + 1;
          if(nextIndex >= $scope.art.length) {
            nextIndex = 0;
          }
          $scope.current = $scope.art.filter(function(item) {
            return item.sortOrder === nextIndex;
          })[0];
        };

        this.previous = function() {
          var previousIndex = $scope.current.sortOrder - 1;
          if(previousIndex < 0) {
            previousIndex = $scope.art.length - 1;
          }
          $scope.current = $scope.art.filter(function(item) {
            return item.sortOrder === previousIndex;
          })[0];
        };

        this.hasDimensions = function(art) {
          return art.width && art.height;
        };

        this.getFullUrl = function(url) {
          if(url) {
            return cloudinaryService.getScaledWidthUrl(url, 800);
          } else {
            return '';
          }
        }
      }
    ]);
})();
