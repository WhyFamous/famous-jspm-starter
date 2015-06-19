var gulp       = require('gulp');
var changed    = require('gulp-changed');
var browserSync  = require('browser-sync');
var paths     = require('../config').paths;

gulp.task('images', function() {
  return gulp.src(paths.wildcards.images)
    .pipe(changed(paths.dest + paths.images)) // Ignore unchanged files
    .pipe(gulp.dest(paths.dest + paths.images))
    .pipe(browserSync.reload({stream:true}));
});
