var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
  return gulp.src('scss/app.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('build/css'));
});

 
gulp.task('sass:watch', function () {
  gulp.watch('*.scss', ['sass']);
});

// Run all Refinedby Tasks
gulp.task('all', ['sass']);