//プラグイン
var gulp = require('gulp'),
	sass = require('gulp-sass'),
	plumber = require('gulp-plumber');

// コンパイル
gulp.task('sass-compile', () =>{
	return gulp.src('./scss/*.scss')
		.pipe(plumber({
			errorHandler: function(err) {
				console.log(err.messageFormatted);
				this.emit('end');
			}
		}))
		.pipe(sass())
		.pipe(gulp.dest('./css/'));
});

// watch 監視
gulp.task('watch', function () {
	gulp.watch('./scss/*.scss', ['sass-compile']);
});