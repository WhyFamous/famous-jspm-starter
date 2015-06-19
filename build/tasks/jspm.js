// this task takes a good amount of time to create
// should only be used on condition of not being cleaned often
var gulp = require('gulp');
var changed = require('gulp-changed');
var paths = require('../config').paths;

gulp.task('jspm-packages', ['jspm-config'], function() {
  return gulp.src(paths.jspm + '**')
    .pipe(gulp.dest(paths.dest + paths.jspm))
});

// copies the config.js for jspm to the destination
gulp.task('jspm-config', function() {
  return gulp.src(['config.js'])
    .pipe(gulp.dest(paths.dest))
});

gulp.task('jspm-packages-bundle', ['jspm-config'], function() {
  return gulp.src(paths.jspm + '*.js')
    .pipe(gulp.dest(paths.dest + paths.jspm))
});
