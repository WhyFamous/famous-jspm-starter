var gulp = require('gulp');
var paths = require('../paths');
var browserSync = require('browser-sync');

// outputs changes to files to the console
function reportChange(event){
  console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
}

// this task wil watch for changes
// to js, html, and css files and call the
// reportChange method. Also, by depending on the
// serve task, it will instantiate a browserSync session
gulp.task('watch', ['serve'], function() {
  gulp.watch(paths.source, ['build-system', browserSync.reload]).on('change', reportChange);
  gulp.watch(paths.html, ['build-html', browserSync.reload]).on('change', reportChange);
  gulp.watch(paths.style, browserSync.reload).on('change', reportChange);
});

gulp.task('watch-bundle', ['serve-bundle'], function() {
  gulp.watch(paths.source, ['build-system', 'bundle', browserSync.reload]).on('change', reportChange);
  gulp.watch(paths.html, ['build-html', browserSync.reload]).on('change', reportChange);
  gulp.watch(paths.style, browserSync.reload).on('change', reportChange);
});

gulp.task('watch-sfx', ['serve-sfx'], function() {
  gulp.watch(paths.source, ['build-sfx', browserSync.reload]).on('change', reportChange);
  gulp.watch(paths.html, ['build-html', browserSync.reload]).on('change', reportChange);
  gulp.watch('sfx-index.html', ['build-sfx-html', browserSync.reload]).on('change', reportChange);
  gulp.watch(paths.style, ['build-css', browserSync.reload]).on('change', reportChange);
});