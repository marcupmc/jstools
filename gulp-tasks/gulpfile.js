/**
 * Created by marcgregoire on 10/02/2016.
 */
var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename')

gulp.task('concat', function() {
  return gulp.src('./app/*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('./dist/'));
});


gulp.task('compress', ['concat'], function() {
  return gulp.src('./dist/all.js')
        .pipe(uglify())
        .pipe(rename('all.min.js'))
        .pipe(gulp.dest('./dist/'));
});
