(function() {
  'use strict';

  angular.module('App')
    .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
      $routeProvider
       .when('/', {
          template: '<gallery images="{{vm.art}}"></gallery>',
        })
        .when('/about', {
          template: '<about></about>'
        })
        .otherwise('/');
    }]);
})();
