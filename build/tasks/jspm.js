// this task takes a good amount of time to create
// should only be used on condition of not being cleaned often
var gulp = require('gulp');
var changed = require('gulp-changed');
var config = require('../config').jspm;

gulp.task('jspm-packages', ['jspm-config'], function() {
  return gulp.src(config.src + '/**')
    .pipe(gulp.dest(config.dest + config.src.replace('.','')))
});

// copies the config.js for jspm to the destination
gulp.task('jspm-config', function() {
  return gulp.src(config.root + '/config.js')
    .pipe(gulp.dest(config.dest))
});

gulp.task('jspm-packages-bundle', ['jspm-config'], function() {
  return gulp.src(config.src + '/*.js')
    .pipe(gulp.dest(config.dest + config.src.replace('.','')))
});
