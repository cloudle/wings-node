koa         = require('koa'); app = koa()
router      = require('koa-router')()
twitter     = require('ntwitter')
configures  = require('./http/config')(app, router)

app.use router.routes()
app.use require('koa-static')('./public')
app.use (next) ->
  start = new Date
  yield next
  ms = new Date - start
  console.log '%s %s - %s', @method, @url, ms

app.use *-> @body = 'hello world!'

require('./socket/start')(app)

console.log 'Wings is up..'
app.listen configures.port