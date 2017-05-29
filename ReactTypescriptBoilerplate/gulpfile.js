/// <binding AfterBuild='default' Clean='clean' />

var gulp = require('gulp');
var del = require('del');
var exec = require('child_process').exec;

gulp.task('clean', function (callback) {
    del('./wwwroot/dist', callback);
});

gulp.task('webpack', function (callback) {
    exec('webpack', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        callback(err);
    });
});

gulp.task('include/react', function () {
    return gulp
        .src('./node_modules/react/dist/react.js')
        .pipe(gulp.dest('./wwwroot/dist/react'));
});

gulp.task('include/react-dom', function () {
    return gulp
        .src('./node_modules/react-dom/dist/react-dom.js')
        .pipe(gulp.dest('./wwwroot/dist/react-dom'));
});

gulp.task('include/react-bootstrap', function () {
    return gulp
        .src('./node_modules/react-bootstrap/dist/react-bootstrap.js')
        .pipe(gulp.dest('./wwwroot/dist/react-bootstrap'));
});

gulp.task('default', ['webpack', 'include/react', 'include/react-dom', 'include/react-bootstrap'], function () {
    // place code for your default task here
});