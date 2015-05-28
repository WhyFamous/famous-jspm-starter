var gulp = require('gulp');
var changed    = require('gulp-changed');
var config = require('../config').styles;
var browserSync  = require('browser-sync');

gulp.task('styles', function() {
  return gulp.src(config.src)
    .pipe(changed(config.dest, {extension: '.css'}))
    .pipe(gulp.dest(config.dest))
    .pipe(browserSync.reload({stream:true}));
});
