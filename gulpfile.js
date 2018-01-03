var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');


gulp.task('sass', function () {
  return gulp.src('scss/app.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('build/css'));
});

gulp.task('minify-css', function () {
  return gulp.src('build/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('build'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('*.scss', ['sass']);
});

// Run all Refinedby Tasks
gulp.task('all', ['sass', 'minify-css']);