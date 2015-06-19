var gulp = require('gulp');
var runSequence = require('run-sequence'); // only until gulp 4.0
var changed = require('gulp-changed');
var rename = require('gulp-rename');
var plumber = require('gulp-plumber');
var to5 = require('gulp-babel');
var sourcemaps = require('gulp-sourcemaps');
var browserSync  = require('browser-sync');
var config = require('../config');
var paths = config.paths;
var assign = Object.assign || require('object.assign');

var babelOptions = config.babel.options;

// this task calls the clean task (located
// in ./clean.js), then runs the build-system
// and markup tasks in parallel
// https://www.npmjs.com/package/gulp-run-sequence
gulp.task('build', ['clean', 'clean-bundle', 'unbundle'], function(callback) {
  return runSequence(
    ['build-scripts', 'assets'],
    ['jspm-packages'],
     callback
  );
});

gulp.task('assets', function(callback) {
  return runSequence(
    ['ico', 'images', 'markup', 'styles'],
    callback
  );
});

gulp.task('build-bundle', ['clean', 'clean-bundle'], function(callback) {
  return runSequence(
    ['assets'],
    ['bundle'],
    ['jspm-packages-bundle'],
    callback
  );
});

// transpiles changed es6 files to SystemJS format
// the plumber() call prevents 'pipe breaking' caused
// by errors from other gulp plugins
// https://www.npmjs.com/package/gulp-plumber
gulp.task('build-scripts', function () {
  return gulp.src([paths.wildcards.scripts])
    .pipe(plumber())
    .pipe(changed(paths.dest + paths.scripts, {extension: '.js'}))
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(to5(assign({}, babelOptions, {modules:'system'})))
    .pipe(sourcemaps.write({includeContent: false, sourceRoot: './' }))
    .pipe(gulp.dest(paths.dest + paths.scripts))
    .pipe(browserSync.reload({stream:true}));
});

// builds a single self-executing bundle
gulp.task('build-sfx', function(callback) {
  return runSequence(
    ['clean'],
    ['build-sfx-html', 'bundle-sfx', 'sfx-assets'],
    callback
  );
});

// copies changed html files to the output directory
gulp.task('build-sfx-html', function () {
  return gulp.src(paths.src + 'sfx-index.html')
    .pipe(changed(paths.dest, {extension: '.html'}))
    .pipe(rename('index.html'))
    .pipe(gulp.dest(paths.dest))
    .pipe(browserSync.reload({stream:true}));
});

gulp.task('sfx-assets', function(callback) {
  return runSequence(
    ['ico', 'images', 'styles'],
    callback
  );
});
