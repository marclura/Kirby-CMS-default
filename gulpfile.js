const gulp = require('gulp'),
	stylus = require('gulp-stylus'),
	path = require('path'),
	sourcemaps = require('gulp-sourcemaps'),
	autoprefixer = require('autoprefixer'),
	cssnano = require('cssnano'),
	postcss = require('gulp-postcss'),
	browsersync = require('browser-sync'),
	connect = require('gulp-connect-php');

cssWatch = [
	'assets/styl/*.styl',
	'assets/styl/**/*.styl'
];

function cssUpdate() {
	return gulp
		.src('assets/styl/main.styl')
		.pipe(sourcemaps.init())
		.pipe(stylus())
		.pipe(postcss([
			autoprefixer(),
			cssnano()
			]))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('assets/css'));
}

function serve() {

	return connect.server({
        router: './kirby/router.php',
        port: 8000,
        keepalive: true,
        debug: true
    }, function() {
        browsersync({
            proxy: '127.0.0.1:8000',
            notify: false,
        })
    });

}

function css() {
	gulp.watch(cssWatch).on('change', function() {
		cssUpdate();
		browsersync.reload();
	});
}

gulp.task('default', gulp.parallel(css, serve));