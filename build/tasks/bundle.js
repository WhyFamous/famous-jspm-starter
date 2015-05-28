var gulp = require('gulp');
var jspm = require('jspm/api');
var del = require('del');
var runSequence = require('run-sequence'); // only until gulp 4.0
var vinylPaths = require('vinyl-paths');
var bundle = require('jspm/lib/bundle');
var browserSync  = require('browser-sync');
var paths = require('../config').paths;

// A temporary path for bundle reference for jspm bundle paths
var bundleScripts = paths.scripts + paths.bundle.replace('.','');
// A final destination for the bundle directory location
var bundleDest = paths.dest + bundleScripts.replace('.','');

// builds bundle modules (copies to destination)
gulp.task('bundle', function(callback) {
  return runSequence(
    ['bundle-app'],
    callback
  )
});

// removes the temporary bundle path
gulp.task('bundle-remove', function(callback) {
  del(bundleScripts, callback);
});
// copies the bundles to the bundle directory location
gulp.task('bundle-copy', function() {
  return gulp.src(paths.bundle + '/*.js')
    .pipe(gulp.dest(bundleDest));
});

// Task to run the bundle creation and copies
gulp.task('bundle-app', function(callback) {
  return runSequence(
    ['bundle-famous'],
    ['bundle-app-scripts'],
    ['bundle-copy'],
    ['bundle-remove'],
    callback
  )
});


// Builds a bundle module for our app (copies to temporary)
gulp.task('bundle-app-scripts', function(callback) {
  var deps = [
    'main/*'
  ].join(' + ')

  jspm.bundle(
    deps + ' - ' + paths.bundle + '/famous-bundle',
    paths.bundle + '/app-bundle.js',
    {inject:true, minify: true}
  ).then(function () {
    gulp.src(paths.bundle + '/app-bundle.js')
      .pipe(gulp.dest(bundleSripts));
    callback();
  });
});

// Builds a Famous bundle module (copies to temporary)
gulp.task('bundle-famous', function(callback) {
  jspm.bundle(
    [
      'famous'
    ].join(' + '),
    paths.bundle + '/famous-bundle.js',
    {inject:true, minify: true}
  ).then(function () {
    gulp.src(paths.bundle + '/famous-bundle.js')
      .pipe(gulp.dest(bundleSripts));
    callback();
  });
});

// Un-bundles the jspm items from the project
gulp.task('unbundle', ['clean-bundle'], function() {
  bundle.unbundle();
});

// Creates a self-executing bundle into the deploy build path
gulp.task('bundle-sfx', ['clean-bundle'], function (done) {
  jspm.bundleSFX(
    [
      'main'
    ].join(' + '),
    bundleDest + '/sfx-app-bundle.js',
    {inject:false, minify: true, mangle: true, sourceMaps: true}
  ).then(function () {

    done();
  });
});
