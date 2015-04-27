module.exports = (router) ->
  router.get '/', (next) ->
    @render 'home'
    yield next
