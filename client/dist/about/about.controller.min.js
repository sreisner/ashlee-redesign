(function() {
  'use strict';

  angular.module('App')
    .controller('AboutController', [
      'ApiService',
      'CloudinaryService',
      'ScaledWidth',
      function(apiService, cloudinaryService, scaledWidth) {
        this.getCompressedImageUrl = function() {
          if(this.about) {
            var url = this.about.image.url;
            return cloudinaryService.getScaledWidthUrl(url, scaledWidth.ABOUT);
          } else {
            return '';
          }
        };

        this.init = function() {
          var vm = this;
          apiService.getAbout()
          .then(function(response) {
            vm.about = response.data[0];
          });
        };

        this.init();

      }]);
})();
