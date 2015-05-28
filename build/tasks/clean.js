var gulp = require('gulp');
var config = require('../config').paths;
var del = require('del');
var scriptsDest = config.dest + config.scripts.replace('.','');
var bundleDest = config.dest + config.bundle.replace('.','');

// deletes all files in the destination path
gulp.task('clean', function(callback) {
  del([config.dest], callback);
});

gulp.task('clean-scripts', function(callback) {
  del([scriptsDest+'/**/*.js'], callback);
});

// deletes bundle files in the destination path
gulp.task('clean-bundle', function(callback) {
  del([config.bundle, bundleDest], callback);
});

// deletes all files in the deploy path
gulp.task('clean-deploy', function(callback) {
  del([config.deploy], callback);
});
