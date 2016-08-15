(function() {
  'use strict';

  angular.module('App')
    .directive('gallery', function() {
      return {
        restrict: 'E',
        templateUrl: '/gallery/gallery.tmpl.min.html',
        controller: 'GalleryController',
        controllerAs: 'vm'
      };
    });
})();
