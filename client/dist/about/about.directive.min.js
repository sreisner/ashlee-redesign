(function() {
  'use strict';

  angular.module('App')
    .directive('about', ['$http', function($http) {
      return {
        restrict: 'E',
        templateUrl: '/about/about.tmpl.min.html',
        controller: 'AboutController',
        controllerAs: 'vm'
      };
    }]);
})();
