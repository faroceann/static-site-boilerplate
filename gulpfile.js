var gulp = require('gulp'),
  concat = require('gulp-concat'),
  ngAnnotate = require('gulp-ng-annotate'),
  uglify = require('gulp-uglify'),
  rename = require('gulp-rename'),
  moment = require('moment'),
  notify = require('gulp-notify'),
  sass = require('gulp-sass'),
  cleanCss = require('gulp-clean-css'),
  autoprefixer = require('gulp-autoprefixer'),
  nodemon = require('gulp-nodemon'),
  useref = require('gulp-useref'),
  ejs = require('gulp-ejs'),
  jshint = require('gulp-jshint'),
  gulpIf = require('gulp-if'),
  watch = require('gulp-watch'),
  sourcemaps = require('gulp-sourcemaps'),
  rimraf = require('rimraf'),
  prettify = require('gulp-jsbeautifier'),
  runSequence = require('run-sequence');

var AUTOPREFIXER_BROWSERS = [
  'last 3 versions',
  'ie >= 8',
  'ios >= 7',
  'android >= 4.4',
  'bb >= 10'
];

gulp.task('css', function () {
  return gulp.src('app/scss/*.scss')
    .pipe(sass())
    .pipe(autoprefixer(AUTOPREFIXER_BROWSERS))
    .pipe(gulp.dest('app/css'))
    .pipe(notify({ message: 'Compiled file: <%= file.relative %>' }));
});

gulp.task('watch', function () {
  gulp.watch(['app/**/*.scss'], ['css'])
  nodemon()
})

gulp.task('ejs', function () {
  return gulp.src('./dist/views/pages/*.ejs')
   .pipe(ejs({}, {ext: '.html'}))
   .pipe(prettify())
   .pipe(rename({dirname: ''}))
   .pipe(gulp.dest('./dist'));
});

gulp.task('copy-assets', function () {
  return gulp.src(['./app/assets/**/*'])
  .pipe(gulp.dest('./dist/assets'));
});

gulp.task('clean-up', function (cb) {
  rimraf('./dist/views', cb);
});

gulp.task('useref', function () {
  return gulp.src('./app/views/**/*.ejs', {base: './app'})
    .pipe(useref({ searchPath: './app' }))
    .pipe(gulpIf('*.js', uglify()))
    .pipe(gulpIf('*.css', cleanCss({compatibility: 'ie8'})))
    .pipe(gulp.dest('dist'))
    .pipe(notify({ message: 'Compiled to \'./dist\'' }));
});

gulp.task('build', function (callback) {
  runSequence(['useref', 'copy-assets'], 'ejs', 'clean-up', callback); 
});
