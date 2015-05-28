var gulp       = require('gulp');
var changed    = require('gulp-changed');
var config     = require('../config').ico;
var browserSync  = require('browser-sync');

gulp.task('ico', function() {
  return gulp.src(config.src)
    .pipe(changed(config.dest)) // Ignore unchanged files
    .pipe(gulp.dest(config.dest))
    .pipe(browserSync.reload({stream:true}));
});
