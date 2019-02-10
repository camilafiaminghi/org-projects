import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import HomeView from './HomeView'
import Branches from './Branches'
import RouteNotFound from './../components/RouteNotFound'

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
					<Route exact path="/" component={HomeView} />
					<Route path="/not-found" component={RouteNotFound} />
          <Route path="/branches/:org/:name" component={Branches} />
          <Route component={RouteNotFound} />
      	</Switch>
      </div>
    )
  }
}

export default App;
