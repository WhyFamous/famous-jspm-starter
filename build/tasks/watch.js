var gulp = require('gulp');
var config = require('../config').paths;
var reportChange = require('../utilities/reportChange');

var scripts = config.wildcards.scripts;
var markup = config.wildcards.markup;
var styles = config.wildcards.styles;
var images = config.wildcards.images;

// this task wil watch for changes
// to js, html, and css files and call the
// reportChange method. Also, by depending on the
// serve task, it will instantiate a browserSync session
gulp.task('watch', ['serve'], function() {
  gulp.watch(scripts, ['build-app-scripts']).on('change', reportChange);
  gulp.watch(markup, ['markup']).on('change', reportChange);
  gulp.watch(styles).on('change', reportChange);
});

gulp.task('watch-bundle', ['serve-bundle'], function() {
  gulp.watch(scripts, ['build-scripts', 'bundle']).on('change', reportChange);
  gulp.watch(markup, ['markup']).on('change', reportChange);
  gulp.watch(styles, ['styles']).on('change', reportChange);
});

gulp.task('watch-sfx', ['serve-sfx'], function() {
  gulp.watch(scripts, ['build-sfx']).on('change', reportChange);
  gulp.watch(markup, ['markup']).on('change', reportChange);
  gulp.watch('sfx-index.html', ['build-sfx-html']).on('change', reportChange);
  gulp.watch(styles, ['build-css']).on('change', reportChange);
});
