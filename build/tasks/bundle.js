var gulp = require('gulp');
var jspm = require('jspm/api');
var paths = require('../paths');
var del = require('del');
var vinylPaths = require('vinyl-paths');
var bundle = require('jspm/lib/bundle');

// builds a bundle module
gulp.task('bundle', ['clean-bundle'], function(callback) {
  jspm.bundle(
    [
      '*',
      'famous-jspm-app/*'
    ].join(' + '),
    'app-bundle.js',
    {inject:true, minify: true}
  ).then(function () {
    gulp.src('app-bundle.js')
      .pipe(gulp.dest(paths.output));    
    callback();
  });
});

gulp.task('unbundle', ['clean-bundle'], function() {
  bundle.unbundle();
});

// Creates a self-executing bundle into the deploy build path
gulp.task('bundle-sfx', ['clean-bundle'], function (done) {
  jspm.bundleSFX(
    [
      'src/main'
    ].join(' + '),
    paths.output+paths.js+'sfx-app-bundle.js',
    {inject:false, minify: true, mangle: true, sourceMaps: true}
  ).then(function () {
    done();
  });
});
