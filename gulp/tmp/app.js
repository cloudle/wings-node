var browserify = require('gulp-browserify');
var gulp = require('gulp');
var libs = require('./vendor').libs;
var pkg = require('../../package.json');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');

gulp.task('app', function() {
    var production = (process.env.NODE_ENV === 'production');

    var stream = gulp.src('app.coffee', {read: false})

        // Browserify it
        .pipe(browserify({
            debug: !production,  // If not production, add source maps
            transform: ['coffee-reactify'],
            extensions: ['.cjsx']
        }))
        .on('prebundle', function(bundle) {
            // The following requirements are loaded from the vendor bundle
            libs.forEach(function(lib) {
                bundle.external(lib);
            });
        });

    if (production) {
        // If this is a production build, minify it
        stream.pipe(uglify());
    }

    // Give the destination file a name, adding '.min' if this is production
    stream.pipe(rename(pkg.name + (production ? '.min' : '') + '.js'))

        // Save to the build directory
        .pipe(gulp.dest('build/'));

    return stream;
});