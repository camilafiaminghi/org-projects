import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import HomeView from './HomeView'
import Branches from './../containers/Branches'
import RouteNotFound from './RouteNotFound'

class App extends Component {
	render() {
		return (
			<div className="container">
				<Switch>
					<Route exact path="/" component={HomeView} />
					<Route path="/not-found" component={RouteNotFound} />
					<Route path="/branches/:org/:repo" component={Branches} />
					<Route component={RouteNotFound} />
				</Switch>
			</div>
		)
	}
}

export default App
