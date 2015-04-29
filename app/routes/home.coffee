React = require('react')
App = React.createFactory require('../components/app.cjsx')

module.exports = (router) ->
  router.get '/', (next) ->
    spiderableHtml = React.renderToString(App({title: "Wings.."}))
    @render 'layout', { content: spiderableHtml }
    yield next