'use strict';
var browserify = require('gulp-browserify');
var gulp = require('gulp');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');

var libs = [
    //'react',
    //'react/lib/ReactCSSTransitionGroup',
    //'react/lib/cx',
    //'q',
    //'underscore',
    //'loglevel'
];

gulp.task('vendor', function() {
    var production = (process.env.NODE_ENV === 'production');

    // A dummy entry point for browserify
    var stream = gulp.src('./gulp/noop.js', {read: false})

        // Browserify it
        .pipe(browserify({
            debug: false,  // Don't provide source maps for vendor libs
        }))

        .on('prebundle', function(bundle) {
            // Require vendor libraries and make them available outside the bundle.
            libs.forEach(function(lib) {
                bundle.require(lib);
            });
        });

    if (production) {
        // If this is a production build, minify it
        stream.pipe(uglify());
    }

    // Give the destination file a name, adding '.min' if this is production
    stream.pipe(rename('vendor' + (production ? '.min' : '') + '.js'))

        // Save to the build directory
        .pipe(gulp.dest('build/'));

    return stream;

});

exports.libs = libs;