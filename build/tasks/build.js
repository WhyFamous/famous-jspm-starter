var gulp = require('gulp');
var runSequence = require('run-sequence');
var changed = require('gulp-changed');
var rename = require('gulp-rename');
var plumber = require('gulp-plumber');
var to5 = require('gulp-babel');
var sourcemaps = require('gulp-sourcemaps');
var paths = require('../paths');
var compilerOptions = require('../babel-options');
var assign = Object.assign || require('object.assign');

// transpiles changed es6 files to SystemJS format
// the plumber() call prevents 'pipe breaking' caused
// by errors from other gulp plugins
// https://www.npmjs.com/package/gulp-plumber
gulp.task('build-system', ['clean-system'], function () {
  return gulp.src(paths.source)
    .pipe(plumber())
    .pipe(changed(paths.output, {extension: '.js'}))
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(to5(assign({}, compilerOptions, {modules:'system'})))
    .pipe(sourcemaps.write({includeContent: false, sourceRoot: paths.sourceMapRelativePath }))
    .pipe(gulp.dest(paths.output));
});

// copies changed html files to the output directory
gulp.task('build-html', function () {
  return gulp.src(paths.html)
    .pipe(changed(paths.output, {extension: '.html'}))
    .pipe(gulp.dest(paths.output));
});

// this task calls the clean task (located
// in ./clean.js), then runs the build-system
// and build-html tasks in parallel
// https://www.npmjs.com/package/gulp-run-sequence
gulp.task('build', function(callback) {
  return runSequence(
    ['clean', 'unbundle'],
    ['build-system', 'build-html', 'copy-images'],
    callback
  );
});

gulp.task('build-bundle', function(callback) {
  return runSequence(
    ['clean', 'unbundle'],
    ['build-system'],
    ['bundle', 'build-html'],
    callback
  );
});

// builds a single self-executing bundle
gulp.task('build-sfx', function(callback) {
  return runSequence(
    ['clean'],
    ['build-sfx-html', 'bundle-sfx', 'build-css', 'copy-css'],
    callback
  );
});

// copies changed html files to the output directory
gulp.task('build-sfx-html', function () {
  return gulp.src('sfx-index.html')
    .pipe(changed(paths.output, {extension: '.html'}))
    .pipe(rename('index.html'))
    .pipe(gulp.dest(paths.output));
});

// copies changed css files to the output directory
gulp.task('build-css', function () {
  return gulp.src(paths.style)
    .pipe(changed(paths.output+'/styles', {extension: '.css'}))
    .pipe(gulp.dest(paths.output+'/styles'));
});

gulp.task('copy-images', function () {
  return gulp.src('./'+paths.images+'**/*.*')
    .pipe(gulp.dest(paths.output+paths.images));
});
