(function() {
  'use strict';

  angular.module('App')
    .controller('AppController', [
      '$scope',
      'WindowService',
      'ApiService',
      function($scope,
               windowService,
               apiService) {
        $scope.isLarge = function() {
          return windowService.isLarge();
        };

        $scope.isMedium = function() {
          return windowService.isMedium();
        };

        $scope.isSmall = function() {
          return windowService.isSmall();
        };

        $scope.isLanding = function() {
          return windowService.isLanding();
        };

        $scope.art = [];
        $scope.current = {};
        apiService.getArt()
          .then(function(response) {
            $scope.art = response.data;
          });

        $scope.$on('showModal', function(_, art) {
          $('#image-modal').modal('show');
          $scope.current = art;
        });
      }]);
})();
