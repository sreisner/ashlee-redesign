(function() {
  'use strict';

  angular.module('App')
    .directive('resizeDigest', ['$window', function($window) {
      return {
        restrict: 'A',
        link: function(scope, element) {
          angular.element($window).bind('resize', function() {
            scope.$root.$apply();
          });
        }
      };
    }]);
})();
