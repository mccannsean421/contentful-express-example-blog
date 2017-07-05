var gulp = require('gulp');
var minifyCSS = require('gulp-csso'); //Minify CSS plugin
var concatCss = require('gulp-concat-css'); // Concat CSS plugin
var concat = require('gulp-concat'); //concat js
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var htmlmin = require('gulp-htmlmin');


gulp.task('css', function () {
  return gulp.src('src/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(concatCss("bundle.min.css"))
    .pipe(minifyCSS("bundle.min.css"))
    .pipe(gulp.dest('public/assets/css/'));
});

gulp.task('js', function() {
	return gulp.src(
		[
			'src/js/*.js'
		]
	)
   
	.pipe(concat('bundle.min.js'))
    .pipe(uglify('bundle.min.js'))
    .pipe(gulp.dest('public/assets/js/'));
});

gulp.task('default', [ 'css', 'js']);