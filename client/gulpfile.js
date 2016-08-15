(function() {
  'use strict';

  var gulp = require('gulp');
  var concat = require('gulp-concat');
  var minifyCSS = require('gulp-minify-css');
  var htmlmin = require('gulp-htmlmin');
  var watch = require('gulp-watch');
  var livereload = require('gulp-livereload');
  var rename = require('gulp-rename');
  var uglify = require('gulp-uglify');

  gulp.task('build', function() {
    gulp.start('minify-html');
    gulp.start('minify-css');
    gulp.start('minify-js');
  });

  gulp.task('minify-html', function() {
    gulp.src(['./app/**/*.html', '!./dist/**'])
      .pipe(htmlmin({ collapseWhitespace: true }))
      .pipe(rename({
        suffix: '.min'
      }))
      .pipe(gulp.dest('./dist'))
      .pipe(livereload());
  });

  gulp.task('minify-css', function() {
    gulp.src(['./app/**/*.css', '!./dist/**'])
      .pipe(minifyCSS())
      .pipe(concat('style.min.css'))
      .pipe(gulp.dest('./dist'))
      .pipe(livereload());
  });

  gulp.task('minify-js', function() {
    gulp.src(['./app/**/*.js', '!./dist/**'])
      // .pipe(uglify())
      .pipe(rename({
        suffix: '.min'
      }))
      .pipe(gulp.dest('./dist'))
      .pipe(livereload());
  });

  gulp.task('watch', function () {
    gulp.start('build');
    livereload.listen({ start: true });

    watch(['./app/**/*.html', '!./dist/**'], function() {
      gulp.start('minify-html');
    });

    watch(['./app/**/*.css', '!./dist/**'], function() {
      gulp.start('minify-css');
    });

    watch(['./app/**/*.js', '!./dist/**'], function() {
      gulp.start('minify-js');
    });
  });
})();
