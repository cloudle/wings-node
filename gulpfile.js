var gulp = require('gulp');
var gutil = require('gulp-util');
var watchify = require('watchify');
var browserify = require('browserify');
var coffeeify = require('coffeeify');
var source = require('vinyl-source-stream');
var _ = require('underscore');

var browserifyOpts = {
    basedir: "./",
    debug: true,
    extensions: ['.coffee'],
    entries: ['./app.coffee']
};
var opts = _.extend({}, watchify.args, browserifyOpts);
var bundler = browserify(opts).transform('coffeeify');
var watch = watchify(bundler);

watch.on('update', bundle);
watch.on('log', gutil.log);

function bundle() {

    var b = function() {
        return bundler
            .bundle()
            .pipe(source('bundle.js'))
            .pipe(gulp.dest('public/scripts'));
    };

    return b();
}

gulp.task('default', ['browserify-main']);
gulp.task('browserify-main', bundle);