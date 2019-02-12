import React, { Component, Fragment } from 'react'
import FormSearch from './FormSearch'
import Results from './Results'

class HomeView extends Component {
	render() {
		return (
			<Fragment>
				<header>
					<h2>Search the repositories of an organization</h2>
				</header>
				<FormSearch />
				<Results />
			</Fragment>
		)
	}
}

export default HomeView
