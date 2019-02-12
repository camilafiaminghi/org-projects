import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import RepoItem from './../components/RepoItem'
import RankControls from './RankControls'
import LanguageFilter from './LanguageFilter'

export class Results extends Component {

	static propTypes = {
		errors: PropTypes.array,
		items: PropTypes.array,
		org: PropTypes.string,
		loading: PropTypes.bool
	}

	render() {
		const { errors, items, org, loading } = this.props

		/* ERROR MESSAGES */
		if ( errors ) {
			return (
				<div>
					<ul>
						{errors.map((error) => (
							<li key={error.resource}>{error.message}</li>
						))}
					</ul>
				</div>
			)
		}

		return (
			<Fragment>
				{( items ) && (
					<Fragment>
						<RankControls />
						<LanguageFilter />
					</Fragment>
				)}
				{( loading ) && (<div>Searching...</div>)}
				{( items && items.length > 0 ) &&
					<section className="results">
						<h3>{org}'s repositories:</h3>
						<ol>
							{items.map((item) => (
								<li key={item.id}><RepoItem {...item} org={org} /></li>
							))}
						</ol>
					</section>
				}
			</Fragment>
		)
	}
}

export const mapStateToProps = ({ repos }) => {
	const { errors, items, org, loading } = repos
	return {
		errors,
		items,
		org,
		loading
	}
}

export default connect(mapStateToProps)(Results)
