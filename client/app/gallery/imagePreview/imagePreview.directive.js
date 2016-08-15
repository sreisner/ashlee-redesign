(function() {
  'use strict';

  var DEFAULT_HOVER_ZOOM_SCALE = '1.1';
  var DEFAULT_HOVER_ZOOM_SPEED = '0.5';
  var DEFAULT_HOVER_ZOOM_FUNCTION = 'ease';
  var DEFAULT_PREVIEW_POSITION = '0';

  angular.module('App')
    .directive('imagePreview', function() {
      return {
        restrict: 'E',
        scope: {
          url: '@',
          hoverZoomScale: '@',
          hoverZoomSpeed: '@',
          hoverZoomFunction: '@',
          previewPosition: '@'
        },
        templateUrl: '/gallery/imagePreview/imagePreview.tmpl.min.html',
        controller: 'ImagePreviewController',
        controllerAs: 'vm',
        link: function(scope, element, attrs, controller) {
          var hoverZoomScale = attrs.hoverZoomScale || DEFAULT_HOVER_ZOOM_SCALE;
          var hoverZoomSpeed = attrs.hoverZoomSpeed || DEFAULT_HOVER_ZOOM_SPEED;
          var hoverZoomFunction = attrs.hoverZoomFunction || DEFAULT_HOVER_ZOOM_FUNCTION;
          var previewPosition = attrs.previewPosition || DEFAULT_PREVIEW_POSITION;

          var frame = angular.element(element[0].firstChild);
          var image = angular.element(frame[0].firstChild);
          image.bind('load', function(event) {
            var width = image[0].naturalWidth;
            var height = image[0].naturalHeight;

            var centerTransformCss;
            var previewPositionPercentage = previewPosition / 100;
            if(width > height) {
              image.addClass('wide');
              var originOffset = (previewPositionPercentage * image[0].width - (previewPositionPercentage * frame[0].width - frame[0].width / 2));
              image[0].style.transformOrigin = '' + originOffset + 'px ' + frame[0].height / 2 + 'px';
              image[0].style.left = previewPosition + '%';
              centerTransformCss = 'translateX(-' + previewPosition + '%)';
            } else {
              image.addClass('tall');
              var originOffset = (previewPositionPercentage * image[0].height - (previewPositionPercentage * frame[0].height - frame[0].height / 2));
              image[0].style.transformOrigin = '' + frame[0].height / 2 + 'px ' + originOffset + 'px';
              image[0].style.top = previewPosition + '%';
              centerTransformCss = 'translateY(-' + previewPosition + '%)';
            }

            image[0].style.transform = centerTransformCss;

            var zoomCss = 'scale(' + hoverZoomScale + ')';

            image.hover(function() {
              image[0].style.transform = centerTransformCss + ' ' + zoomCss;
            }, function() {
              image[0].style.transform = centerTransformCss;
            });

            image[0].style.transition = 'all ' + hoverZoomSpeed + 's ' + hoverZoomFunction;
            
            controller.loading = false;
            scope.$apply();
          });
        }
      };
    });
})();
