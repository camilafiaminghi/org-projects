import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

export class Branches extends Component {

	static propTypes = {
		org: PropTypes.string,
		repo: PropTypes.string
	}

	render() {
		const { org, repo } = this.props

		return (
			<div>
				<header>
					<Link to="/">Go to Home</Link>
					<h2>{repo} branches from {org}</h2>
				</header>
			</div>
		)
	}
}

export const mapStateToProps = (state, props) => {
	const { org, repo } = props.match.params

	return {
		org,
		repo
	}
}

export default connect(mapStateToProps)(Branches);
