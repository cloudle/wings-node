jade = require 'koa-jade'
jadeGlobal = {}

module.exports = (app) ->
  app.use jade.middleware
    viewPath: "./views"
    debug: false
    pretty: false
    compileDebug: false
    locals: jadeGlobal
    basedir: "./views"
#    helperPath: [
#      "#{__dirname}/views/helpers"
#    ]