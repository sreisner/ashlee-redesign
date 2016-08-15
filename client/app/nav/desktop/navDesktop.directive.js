(function() {
  'use strict';

  angular.module('App')
    .directive('navDesktop', function() {
      return {
        templateUrl: '/nav/desktop/navDesktop.tmpl.min.html',
        controller: 'NavDesktopController',
        controllerAs: 'vm'
      };
    });
})();
