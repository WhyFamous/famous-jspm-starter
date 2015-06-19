var gulp = require('gulp');
var jspm = require('jspm/api');
var del = require('del');
var runSequence = require('run-sequence'); // only until gulp 4.0
var vinylPaths = require('vinyl-paths');
var bundle = require('jspm/lib/bundle'); // will be released soon
var browserSync  = require('browser-sync');
var paths = require('../config').paths;

// A temporary path for bundle reference for jspm bundle paths
var bundleScripts = paths.scripts + paths.bundle;
// A final destination for the bundle directory location
var bundleDest = paths.dest + bundleScripts;

// builds bundle modules (copies to destination)
gulp.task('bundle', function(callback) {
  return runSequence(
    ['build-scripts'],
    ['bundle-famous'],
    ['bundle-app'],
    callback
  )
});

gulp.task('bundle-app', function(callback) {
  return runSequence(
    ['bundle-copy-scripts'],
    ['bundle-app-scripts'],
    ['bundle-app-copy'],
    callback
  )
});

gulp.task('bundle-app-copy', function() {
  return gulp.src(paths.bundle + '*.js')
    .pipe(gulp.dest(bundleDest));
});

gulp.task('bundle-copy-scripts', ['build-scripts'], function () {
  return gulp.src([paths.dest + paths.scripts + '**/*.js'])
    .pipe(gulp.dest(paths.scripts));
});

// Builds a bundle module for our app (copies to temporary)
gulp.task('bundle-app-scripts', function(callback) {
  var deps = [
    'main/*'
  ].join(' + ')

  jspm.bundle(
    deps + ' - ' + paths.bundle + 'famous-bundle',
    paths.bundle + 'app-bundle.js',
    {inject:true, minify: true}
  ).then(function () {
    gulp.src(paths.bundle + 'app-bundle.js')
      .pipe(gulp.dest(bundleScripts));
    callback();
  });
});

// Builds a Famous bundle module (copies to temporary)
gulp.task('bundle-famous', function(callback) {
  jspm.bundle(
    [
      'famous'
    ].join(' + '),
    paths.bundle + 'famous-bundle.js',
    {inject:true, minify: true}
  ).then(function () {
    gulp.src(paths.bundle + 'famous-bundle.js')
      .pipe(gulp.dest(bundleScripts));
    callback();
  });
});

// Un-bundles the jspm items from the project
gulp.task('unbundle', ['clean-bundle'], function() {
  bundle.unbundle();
});

// Creates a self-executing bundle into the deploy build path
gulp.task('bundle-sfx', ['clean-scripts'], function(callback) {
  return runSequence(
    ['build-scripts'],
    ['bundle-copy-scripts'],
    ['bundle-sfx-file'],
    callback
  )
});

gulp.task('bundle-sfx-file', function (done) {
  jspm.bundleSFX(
    [
      'main'
    ].join(' + '),
    bundleDest + 'sfx-app-bundle.js',
    {inject:false, minify: true, mangle: true, sourceMaps: true}
  ).then(function () {
    browserSync.reload({stream:false});
    done();
  });
});
