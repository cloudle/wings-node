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
var coffeeBundler = browserify(opts).transform('coffeeify');
var coffeeWatcher = watchify(coffeeBundler);

coffeeWatcher.on('update', coffeeBundle);
coffeeWatcher.on('log', gutil.log);

function coffeeBundle() {
    return function() {
        return coffeeBundler.bundle().pipe(source('bundle.js')).pipe(gulp.dest('public/scripts'))
    }();
}

gulp.task('default', ['browserify-main']);
gulp.task('browserify-main', coffeeBundle);