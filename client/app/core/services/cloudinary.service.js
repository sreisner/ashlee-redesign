(function() {
  angular.module('App')
    .factory('CloudinaryService', function() {
      return {
        getScaledWidthUrl: function(url, desiredWidth) {
          var splitUrl = url.split('upload');
          return splitUrl[0] + 'upload/w_' + desiredWidth + splitUrl[1];
        }
      };
    });
})();
