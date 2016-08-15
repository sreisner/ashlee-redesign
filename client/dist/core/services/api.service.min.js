(function() {
  'use strict';

  angular.module('App')
    .factory('ApiService', ['$http', function($http) {
      return {
        getArt: function() {
          return $http.get('/api/art');
        },
        getAbout: function() {
          return $http.get('/api/about');
        }
      };
    }]);
})();
