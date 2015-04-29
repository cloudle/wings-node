window.React = React = require('react')
window.$ = $ = require('jquery')

require('./components/test.cjsx')

App = React.createFactory require('./components/app.cjsx')
mountNode = document.getElementById("application-mount-node")

React.render new App({title: "Wings.React"}), mountNode