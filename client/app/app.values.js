(function() {
  'use strict';

  angular.module('App')
    .value('WindowWidthThreshold', {
      LARGE: 1200,
      MEDIUM: 600
    })
    .value('ScaledWidth', {
      PREVIEW: 500,
      ABOUT: 800
    });
})();
