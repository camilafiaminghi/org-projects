import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import RepoItem from './../components/RepoItem'
import RankControls from './RankControls'
import LanguageFilter from './LanguageFilter'

export class Results extends Component {

	static propTypes = {
		org: PropTypes.string,
		loading: PropTypes.bool,
		errors: PropTypes.array,
		items: PropTypes.array,
		totalCount: PropTypes.number
	}

	render() {
		const { org, loading, errors, items, totalCount } = this.props

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
				{( loading ) && (
					<section className="results">
						<h3>Searching...</h3>
					</section>
				)}
				{( items && items.length > 0 ) &&
					<section className="results">
						<h3>{org}'s repositories [show: {items.length}/{totalCount}]:</h3>
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
	const { org, loading, errors, items, total_count } = repos
	return {
		org,
		loading,
		errors,
		items,
		totalCount: total_count
	}
}

export default connect(mapStateToProps)(Results)
