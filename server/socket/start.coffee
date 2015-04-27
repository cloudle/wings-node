module.exports = (app) ->
  server = require('http').Server(app.callback())
  io = require('socket.io')(server)