import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getRepos } from './../actions/repos'

class RankControls extends Component {

	static propTypes = {
		sort: PropTypes.string,
		org: PropTypes.string
	}

	handleOnClick = (event) => {
		const { org, handleRepos } = this.props

		handleRepos({
			org,
			language: null,
			sort: event.target.value
		})
	}

	render() {
		const { sort } = this.props
		const items = ['stars', 'forks']

		if (!sort) {
			return (<span>Sort by is not enabled</span>)
		}

		return (
			<section>
				<h3>Sort by <strong>{sort}</strong> rank</h3>
				{ items.map((item) => (
					<button
						key={item}
						className={(sort === item) ? 'disabled' : ''}
						disabled={sort === item}
						value={item}
						onClick={this.handleOnClick}
						type="button">{item}</button>
				))}
			</section>
		)
	}
}

export const mapStateToProps = ({ repos }) => {
	const { sort, org } = repos

	return {
		sort,
		org
	}
}

export const mapDispatchToProps = (dispatch) => {
  return {
    handleRepos: (search) => dispatch(getRepos(search))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RankControls)
