var gulp = require('gulp');
var browserSync = require('browser-sync');
var paths = require('../config').paths;
var destPath = './' + paths.dest;

// this task utilizes the browsersync plugin
// to create a dev server instance
// at http://localhost:9000
gulp.task('serve', ['build'], function(done) {
  browserSync({
    open: false,
    port: 9000,
    server: {
      baseDir: [destPath],
      middleware: function (req, res, next) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        next();
      }
    }
  }, done);
});

gulp.task('serve-bundle', ['build-bundle'], function(done) {
  browserSync({
    open: false,
    port: 9000,
    server: {
      baseDir: [destPath],
      middleware: function (req, res, next) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        next();
      }
    }
  }, done);
});

gulp.task('serve-sfx', ['build-sfx'], function(done) {
  browserSync({
    open: false,
    port: 9000,
    server: {
      baseDir: [destPath],
      middleware: function (req, res, next) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        next();
      }
    }
  }, done);
});
