(function() {
  'use strict';

  angular.module('App')
    .factory('WindowService', [
      '$window',
      '$document',
      'WindowWidthThreshold',
      function($window,
               $document,
               WindowWidthThreshold) {
        return {
          isLarge: function() {
            return $window.innerWidth >= WindowWidthThreshold.LARGE;
          },

          isMedium: function() {
            return $window.innerWidth >= WindowWidthThreshold.MEDIUM &&
                   $window.innerWidth < WindowWidthThreshold.LARGE;
          },

          isSmall: function() {
            return $window.innerWidth < WindowWidthThreshold.MEDIUM
          },

          isLanding: function() {
            return $document.find('body')[0].scrollTop > $window.innerHeight;
          }
        };
      }]);
})();
