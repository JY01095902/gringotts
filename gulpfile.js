var gulp = require('gulp'),
    watch = require('gulp-watch'),
    connect = require('gulp-connect')
    less = require('gulp-less');

gulp.task('load-framework7', function () {
    gulp.src('./bower_components/Framework7/dist/css/*.ios.css')
        .pipe(gulp.dest('./app/.tmp/plugins/framework7/css'));
    gulp.src('./bower_components/Framework7/dist/css/*.ios.colors.css')
        .pipe(gulp.dest('./app/.tmp/plugins/framework7/css'));
    gulp.src('./bower_components/Framework7/dist/js/framework7.js')
        .pipe(gulp.dest('./app/.tmp/plugins/framework7/js'));
    gulp.src('./bower_components/Framework7/dist/js/my-app.js')
        .pipe(gulp.dest('./app/.tmp/plugins/framework7/js'));
    gulp.src('./bower_components/Framework7/dist/img/*-ios.*')
        .pipe(gulp.dest('./app/.tmp/plugins/framework7/img'));
});

gulp.task('less', function () {
    gulp.src('./app/styles/*.less')
        .pipe(less())
        .pipe(gulp.dest('./app/.tmp/styles'))
})

gulp.task('webserver', function () {
    connect.server({
        port: 8081,
        livereload: true,
        root: ['./app', './app/.tmp'],
    });
})

gulp.task('reload', function () {
    gulp.src('./app/**/*.html')
        .pipe(watch('./app/**/*.html'))
        .pipe(watch('./app/.tmp/styles/**/*.css'))
        .pipe(connect.reload());
})

gulp.task('watch', function () {
    gulp.watch('./app/**/*.html', ['reload']);
    gulp.watch('./app/styles/**/*.less', ['less']);
})

gulp.task('default', ['load-framework7', 'less', 'webserver', 'reload', 'watch']);