(function() {
  'use strict';

  angular.module('App')
    .controller('AppController', ['WindowService', function(windowService) {
      this.isDesktop = function() {
        return windowService.isDesktop();
      };

      this.isMobile = function() {
        return windowService.isMobile();
      };

      this.isLanding = function() {
        return windowService.isLanding();
      };
    }]);
})();
