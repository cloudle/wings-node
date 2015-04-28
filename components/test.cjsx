React = require('react')

NeatComponent = React.createClass
  render: ->
    <div className="neat-component">
      {<h1>I m a component</h1> if @props.showTitle}
      <hr />
      {<p key={n}>This line has been printed {n} times</p> for n in [1..5]}
    </div>