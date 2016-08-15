(function() {
  'use strict';

  angular.module('App')
    .directive('imageModal', function() {
      return {
        restrict: 'E',
        templateUrl: '/imageModal/imageModal.tmpl.min.html',
        controller: 'ImageModalController',
        controllerAs: 'vm'
      };
    });
})();
