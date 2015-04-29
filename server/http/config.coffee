fs = require('fs')

loadRoutes = (router) ->
  fs.readdirSync('./app/routes/').forEach (file) ->
    console.log 'loading..'
    nameWithoutExtension = file.substr 0, file.indexOf('.')
    route = "../../app/routes/#{nameWithoutExtension}"
    console.log("Adding route: #{nameWithoutExtension}")
    require(route)(router)

module.exports = (app, router) ->
  require('./template.coffee')(app)
  loadRoutes(router)

  db: require('./data')
  port: process.env.PORT || 3000
