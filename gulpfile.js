var gulp = require("gulp");
	connect = require("gulp-connect");
	opn = require("opn");
	sass = require('gulp-sass');


gulp.task('connect', function() {
  connect.server({
    root: 'app',
    livereload: true,
    port: 8888
  });
  opn('http:/localhost:8888');
});
 

gulp.task('sass', function () {
  gulp.src('./app/css/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./app/css'));
});
 
gulp.task('html', function () {
  gulp.src('./app/*.html')
    .pipe(connect.reload());
});

gulp.task('css', function () {
  gulp.src('./app/css/*.css')
    .pipe(connect.reload());
});

gulp.task('js', function () {
  gulp.src('./app/js/*.js')
    .pipe(connect.reload());
});

gulp.task('watch', function () {
  gulp.watch(['./app/*.html'], ['html']);
  gulp.watch(['./app/js/*.js'], ['js']);
  gulp.watch(['./app/css/*.css'], ['css']);
  gulp.watch(['./app/css/*.scss'], ['sass']);

});
 
gulp.task('default', ['connect', 'watch']);