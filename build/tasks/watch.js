var gulp = require('gulp');
var paths = require('../config').paths;
var reportChange = require('../utilities/reportChange');
var browserSync  = require('browser-sync');

var markup = paths.wildcards.markup;
var styles = paths.wildcards.styles;
var images = paths.wildcards.images;

var scripts = [paths.wildcards.scripts];

// this task will watch for changes
// to js, html, and css files and call the
// reportChange method. Also, by depending on the
// serve task, it will instantiate a browserSync session
gulp.task('watch', ['serve'], function() {
  gulp.watch(scripts, ['build-scripts']).on('change', reportChange);
  gulp.watch(markup, ['markup']).on('change', reportChange);
  gulp.watch(styles, ['styles']).on('change', reportChange);
});

gulp.task('watch-bundle', ['serve-bundle'], function() {
  gulp.watch(scripts, ['build-scripts', 'bundle-app', browserSync.reload]).on('change', reportChange);
  gulp.watch(markup, ['markup']).on('change', reportChange);
  gulp.watch(styles, ['styles']).on('change', reportChange);
});

gulp.task('watch-sfx', ['serve-sfx'], function() {
  gulp.watch(scripts, ['bundle-sfx']).on('change', reportChange);
  gulp.watch('sfx-index.html', ['build-sfx-html']).on('change', reportChange);
  gulp.watch(styles, ['styles']).on('change', reportChange);
});
