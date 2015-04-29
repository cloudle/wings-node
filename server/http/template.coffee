jade = require 'koa-jade'
jadeGlobal = {}

module.exports = (app) ->
  app.use jade.middleware
    viewPath: "./app/views"
    debug: false
    pretty: false
    compileDebug: false
    locals: jadeGlobal
    basedir: "./app/views"
#    helperPath: [
#      "#{__dirname}/views/helpers"
#    ]