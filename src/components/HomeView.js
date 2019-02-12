import React from 'react'
import FormSearch from './../containers/FormSearch'
import Results from './../containers/Results'

const HomeView = () => {
	return (
		<div>
			<header>
				<h2>Search the repositories of an organization</h2>
			</header>
			<FormSearch />
			<Results />
		</div>
	)
}

export default HomeView
