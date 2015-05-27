var gulp = require('gulp');
var paths = require('../paths');
var del = require('del');
var vinylPaths = require('vinyl-paths');

// deletes all files in the output path
gulp.task('clean', function() {
  return gulp.src([paths.output])
    .pipe(vinylPaths(del));
});

gulp.task('clean-system', function() {
  return gulp.src([paths.output+'**/*.js'])
    .pipe(vinylPaths(del));
});

// deletes bundle files in the output path
gulp.task('clean-bundle', function() {
  return gulp.src([paths.output+'*-bundle*.js','./*-bundle*.js'])
    .pipe(vinylPaths(del));
});

// deletes all files in the deploy path
gulp.task('clean-deploy', function() {
  return gulp.src([paths.deploy])
    .pipe(vinylPaths(del));
});
