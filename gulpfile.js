(function() {
  'use strict';

  var gulp = require('gulp');
  var concat = require('gulp-concat');
  var minifyCSS = require('gulp-minify-css');
  var htmlmin = require('gulp-htmlmin');
  var watch = require('gulp-watch');
  var livereload = require('gulp-livereload');
  var rename = require('gulp-rename');

  gulp.task('build', function() {
    gulp.start('minify-html');
    gulp.start('minify-css');
    gulp.start('minify-js');
  });

  gulp.task('minify-html', function() {
    gulp.src(['./app/**/*.html', '!./app/dist/**'])
      .pipe(htmlmin({ collapseWhitespace: true }))
      .pipe(rename({
        suffix: '.min'
      }))
      .pipe(gulp.dest('./app/dist'))
      .pipe(livereload());
  });

  gulp.task('minify-css', function() {
    gulp.src(['./app/**/*.css', '!./app/dist/**'])
      .pipe(minifyCSS())
      .pipe(concat('style.min.css'))
      .pipe(gulp.dest('./app/dist'))
      .pipe(livereload());
  });

  gulp.task('minify-js', function() {
    gulp.src(['./app/**/*.js', '!./app/dist/**'])
      // TODO:  Actually minify your js.
      .pipe(rename({
        suffix: '.min'
      }))
      .pipe(gulp.dest('./app/dist'))
      .pipe(livereload());
  });

  gulp.task('watch', function () {
    gulp.start('build');
    livereload.listen({ start: true });

    watch(['./app/**/*.html', '!./app/dist/**'], function() {
      gulp.start('minify-html');
    });

    watch(['./app/**/*.css', '!./app/dist/**'], function() {
      gulp.start('minify-css');
    });

    watch(['./app/**/*.js', '!./app/dist/**'], function() {
      gulp.start('minify-js');
    });
  });
})();
