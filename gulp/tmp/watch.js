var gulp = require('gulp');
var gutil = require('gulp-util');
var livereload = require('gulp-livereload');

gulp.task('watch', function() {
    var reloadServer = livereload();

    var app = gulp.watch('src/**/{*.coffee,*.cjsx}');
    app.on('change', function(event) {
        gulp.start('app', function() {
            gutil.log(gutil.colors.bgGreen('Application changed, Wings Reloading...'));
            reloadServer.changed(event.path);
        });
    });

    var vendor = gulp.watch('node_modules/**/*.js');
    vendor.on('change', function(event) {
        gulp.start('vendor', function() {
            gutil.log(gutil.colors.bgGreen('Node package changed, Wings Reloading...'));
            reloadServer.changed(event.path);
        });
    });

    gutil.log(gutil.colors.bgGreen('Watching for changes...'));
});