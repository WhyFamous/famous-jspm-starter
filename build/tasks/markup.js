var gulp = require('gulp');
var changed    = require('gulp-changed');
var browserSync  = require('browser-sync');
var config = require('../config').markup;

gulp.task('markup', function() {
  return gulp.src(config.src)
    .pipe(changed(config.dest, {extension: '.html'}))
    .pipe(gulp.dest(config.dest))
    .pipe(browserSync.reload({stream:true}));
});
