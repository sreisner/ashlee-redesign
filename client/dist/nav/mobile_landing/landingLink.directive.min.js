(function() {
  'use strict';

  angular.module('App')
    .directive('landingLink', function() {
      return {
        restrict: 'A',
        link: function(scope, element, attrs) {
          element.on('click', function() {
            var scrollAmount = window.scrollY + document.getElementById('content').getBoundingClientRect().top - 10;
            $('html,body').animate({ scrollTop: scrollAmount }, 300);
          });
        }
      };
    });
})();
