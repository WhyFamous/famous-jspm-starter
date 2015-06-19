var gulp = require('gulp');
var changed = require('gulp-changed');
var browserSync = require('browser-sync');
var paths = require('../config').paths;

gulp.task('markup', function() {
  return gulp.src(paths.wildcards.markup)
    .pipe(changed(paths.dest, {extension: '.html'}))
    .pipe(gulp.dest(paths.dest))
    .pipe(browserSync.reload({stream:true}));
});
