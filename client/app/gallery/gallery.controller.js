(function() {
  'use strict';

  angular.module('App')
    .controller('GalleryController', [
      '$scope',
      'CloudinaryService',
      'ScaledWidth',
      function($scope, cloudinaryService, scaledWidth) {
        this.getPreviewUrl = function(url) {
          return cloudinaryService.getScaledWidthUrl(url, scaledWidth.PREVIEW);
        };

        this.showModal = function(art) {
          $scope.$emit('showModal', art);
        };
      }]);
})();
