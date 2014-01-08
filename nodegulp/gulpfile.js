// Include gulp
var gulp = require('gulp');

// Include our plugins
var jshint = require('gulp-jshint');
// var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

// Lint Task
gulp.task('lint', function() {
	gulp.src('./js/*.js')
		.pipe(jshint())
		.pipe(jshint.reporter('default'));
});

// Compile sass
/* gulp.task('sass', function() {
	gulp.src('./css/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('./css/build'));
}); */

// Concatenate & Minify js
gulp.task('scripts', function() {
	gulp.src('./js/*.js')
		.pipe(concat('all.js'))
		.pipe(gulp.dest('./js/build'))
		.pipe(rename('all.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./js/build'));
});

// Default task
gulp.task('default', function() {
	gulp.run('lint', 'scripts');

	// Watch for changes to our js
	gulp.watch('./js/*.js', function() {
		gulp.run('lint', 'scripts')
	});

	/* gulp.watch('./css/*.scss', function() {
		gulp.run('sass');
	}); */
});