var gulp = require('gulp');
var paths = require('../config').paths;
var del = require('del');
var scriptsDest = paths.dest + paths.scripts;
var bundleDest = paths.dest + paths.bundle;
var bundleSrc = paths.src + paths.bundle;

// deletes all files in the destination path
gulp.task('clean', ['clean-scripts'], function(callback) {
  del([paths.dest], callback);
});

gulp.task('clean-scripts', function(callback) {
  del([paths.scripts, scriptsDest + '**/*.js'], callback);
});

// deletes bundle files in the destination path
gulp.task('clean-bundle', function(callback) {
  del([paths.bundle, bundleDest], callback);
});

// deletes bundle files in the destination path
gulp.task('clean-bundle-src', function(callback) {
  del([bundleSrc], callback);
});

// deletes all files in the deploy path
gulp.task('clean-deploy', function(callback) {
  del([paths.deploy], callback);
});
