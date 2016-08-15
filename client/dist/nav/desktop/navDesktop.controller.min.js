(function() {
  angular.module('App')
    .controller('NavDesktopController', ['$location', function($location) {
      this.getSelectedTab = function() {
        return $location.path()
      }
    }]);
})();
