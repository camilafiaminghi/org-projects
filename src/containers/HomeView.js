import React, { Component } from 'react'
import FormSearch from './FormSearch'
import SearchResult from './SearchResult'

class HomeView extends Component {
	render() {
		return (
			<div>
				<header>
					<h2>Search the repositories of an organization</h2>
				</header>
				<FormSearch />
				<SearchResult />
			</div>
		)
	}
}

export default HomeView;
