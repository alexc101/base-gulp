var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass= require("gulp-sass");



gulp.task('sass', function () {
    return gulp.src('./dev/scss/**/styles.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist'));
});

gulp.task('sass:watch', function () {
    gulp.watch('./dev/scss/**/*.scss', ['sass']);
});

gulp.task('reload', function (done) {
    browserSync.reload();
    done();
});

gulp.task('serve', ['sass'], function () {

    browserSync.init({
        server: {
            baseDir: "./dist/"
        }
    });

    gulp.watch("./dist/main.js", ['reload']);
    gulp.watch("./dist/*.html", ['reload']);
    gulp.watch("./dev/scss/**/*.scss", ['sass', 'reload']);

});