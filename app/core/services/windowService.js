(function() {
  'use strict';

  angular.module('App')
    .factory('WindowService', ['DesktopWidthThreshold', function(DesktopWidthThreshold) {
      function getWindowWidth() {
        return window.innerWidth;
      }

      function getWindowHeight() {
        return window.innerHeight;
      }

      function getScrollPosition() {
        return document.body.scrollTop;
      }

      var service = {};

      service.isDesktop = function() {
        return getWindowWidth() >= DesktopWidthThreshold;
      };

      service.isMobile = function() {
        return getWindowWidth() < DesktopWidthThreshold;
      };

      service.isLanding = function() {
        return getScrollPosition() > getWindowHeight();
      };

      return service;
    }]);
})();
