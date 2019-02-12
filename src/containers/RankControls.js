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
		const sort = event.target.value
		handleRepos({ sort, org })
	}

	render() {
		const { sort } = this.props
		const items = ['stars', 'forks']

		if (!sort) {
			return (<span>Sort by is not enabled</span>)
		}

		return (
			<section>
				<h3>Sort by </h3>
				{ items.map((item) => (
					<button
						key={item}
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
