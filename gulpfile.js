var gulp = require('gulp'),
    watch = require('gulp-watch'),
    connect = require('gulp-connect'),
    less = require('gulp-less'),
    clean = require('gulp-clean');

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

gulp.task('load-react', function () {
    gulp.src('./bower_components/react/react.js')
        .pipe(gulp.dest('./app/.tmp/plugins/react'));
    gulp.src('./bower_components/react/react-dom.js')
        .pipe(gulp.dest('./app/.tmp/plugins/react'));
    gulp.src('./bower_components/react/react-with-addons.js')
        .pipe(gulp.dest('./app/.tmp/plugins/react'));
    gulp.src('./bower_components/babel/browser.js')
        .pipe(gulp.dest('./app/.tmp/js/babel'));
});

gulp.task('load-js', function () {
    gulp.src('./app/js/**/*.js')
        .pipe(gulp.dest('./app/.tmp/js'));
});

gulp.task('less', function () {
    gulp.src('./app/css/*.less')
        .pipe(less())
        .pipe(gulp.dest('./app/.tmp/css'))
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
        .pipe(watch('./app/.tmp/css/**/*.css'))
        .pipe(watch('./app/.tmp/js/**/*.js'))
        .pipe(connect.reload());
})

gulp.task('watch', function () {
    gulp.watch('./app/**/*.html', ['reload']);
    gulp.watch('./app/css/**/*.less', ['less']);
    gulp.watch('./app/js/**/*.js', ['load-js']);
})

gulp.task('clean', function () {
    return gulp.src('./dist')
        .pipe(clean({force: true}));
})

gulp.task('dist', ['clean'], function () {
    gulp.src('./app/pages/**/*.html')
        .pipe(gulp.dest('./dist/pages'));
    gulp.src('./app/index.html')
        .pipe(gulp.dest('./dist'));
    gulp.src('./app/.tmp/css/**/*.css')
        .pipe(gulp.dest('./dist/css'));
    gulp.src('./bower_components/Framework7/dist/css/*.ios.css')
        .pipe(gulp.dest('./dist/plugins/framework7/css'));
    gulp.src('./bower_components/Framework7/dist/css/*.ios.colors.css')
        .pipe(gulp.dest('./dist/plugins/framework7/css'));
    gulp.src('./bower_components/Framework7/dist/js/framework7.js')
        .pipe(gulp.dest('./dist/plugins/framework7/js'));
    gulp.src('./app/.tmp/js/my-app.js')
        .pipe(gulp.dest('./dist/js'));
    gulp.src('./bower_components/Framework7/dist/img/*-ios.*')
        .pipe(gulp.dest('./dist/plugins/framework7/img'));
})

gulp.task('default', ['load-framework7', 'load-react', 'less', 'load-js', 'webserver', 'reload', 'watch', 'dist']);