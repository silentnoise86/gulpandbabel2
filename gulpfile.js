/**
 * Created by tom on 14/01/2017.
 */

var gulp=require('gulp');
var sass= require('gulp-sass');
var babel= require('gulp-babel');
var browserSync =require('browser-sync').create();


gulp.task('sass', function () {

    return gulp.src('app/scss/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({

            stream:true
        }));

});
gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: 'app'
        },
    })
})


var gulp = require('gulp');
var babel = require('gulp-babel');

gulp.task('bebelify', function () {
    return gulp.src('app/es6/*.js')
        .pipe(babel())
        .pipe(gulp.dest('app/js'));
});

gulp.task('watch', ['browserSync','bebelify','sass'],function () {
    gulp.watch('app/scss/**/*.scss',['sass']);
    gulp.watch('app/*.html', browserSync.reload);
    gulp.watch('app/es6/*.js',['bebelify', browserSync.reload]);

})