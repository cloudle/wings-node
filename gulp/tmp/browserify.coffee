gulp        = require('gulp')
browserSync = require('browser-sync')
browserify  = require('browserify')
watchify    = require('watchify')
bundleLogger= require('../util/bundleLogger')
handleErrors= require('../util/handleErrors')
source      = require('vinyl-source-stream')
mergeStream = require('merge-stream')
config      = require('../config').browserify
_           = require('lodash')

browserifyTask = (devMode) ->
  browserifyThis = (bundleConfig) ->
    if devMode
      _extend bundleConfig, watchify.args, {debug: true}
      bundleConfig = _.omit(bundleConfig, ['external', 'require']);

    b = browserify(bundleConfig)

    bundle = ->
      bundleLogger.start(bundleConfig.outputName)

      b.bundle()
      .on('error', handleErrors)
      .pipe(source(bundleConfig.outputName))
      .pipe(gulp.dest(bundleConfig.dest))
      .pipe(browserSync.reload({ stream: true }))

    if devMode
      b = watchify(b)
      b.on('update', bundle)
      bundleLogger.watch(bundleConfig.outputName)
    else
      b.require(bundleConfig.require) if bundleConfig.require
      b.external(bundleConfig.external) if bundleConfig.external

    bundle()

  mergeStream.apply(gulp, _.map(config.bundleConfigs, browserifyThis));

gulp.task 'browserify', -> browserifyTask()

module.exports = browserifyTask