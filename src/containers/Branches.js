import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getBranches } from './../actions/branches'
import Branch from './../components/Branch'

export class Branches extends Component {

	static propTypes = {
		org: PropTypes.string,
		repo: PropTypes.string,
		error: PropTypes.object,
		items: PropTypes.array,
		loading: PropTypes.bool
	}

	componentDidMount() {
		const { org, repo, handleBranches } = this.props
		handleBranches(org, repo)
	}

	render() {
		const { org, repo, error, items, loading } = this.props

		return (
			<div>
				<header>
					<Link to="/">Go to Home</Link>
				</header>
				{ ( loading ) && <span>Loading...</span> }
				{ ( error ) && <span>{ error.message }</span> }
				{ ( items ) && (
					<section>
						<h2>{repo} branches from {org}</h2>
						<ul>
							{ items.map((item) => (
								<li key={item.name}>
									<Branch {...item} />
								</li>
							))}
						</ul>
					</section>
				)}
			</div>
		)
	}
}

export const mapStateToProps = ({ branches }, props) => {
	const { org, repo } = props.match.params
	const { error, items, loading } = branches

	return {
		org,
		repo,
		error,
		items,
		loading
	}
}

export const mapDispatchToProps = (dispatch) => {
  return {
    handleBranches: (org, repo) => dispatch(getBranches(org, repo))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Branches)
