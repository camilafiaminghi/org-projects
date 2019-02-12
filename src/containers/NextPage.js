import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getRepos } from './../actions/repos'

export class NextPage extends Component {

	static propTypes = {
		org: PropTypes.string,
		sort: PropTypes.string,
		language: PropTypes.string,
		page: PropTypes.number,
		nextPage: PropTypes.bool,
		totalCount: PropTypes.number,
		handleRepos: PropTypes.func
	}

	handleOnClick = (event) => {
		const { org, sort, language, page, handleRepos } = this.props

		handleRepos({
			org,
			sort,
			language,
			page: page + 1
		})
	}

	render() {
		const { nextPage } = this.props

		if (nextPage) {
			return (
				<section className="results">
					<h4>End of results</h4>
				</section>
			)
		}

		return (
			<div className="row">
				<button
					onClick={this.handleOnClick}>
					+ results
				</button>
			</div>
		)
	}
}

export const mapStateToProps = ({ repos }) => {
	const { org, sort, language, page, nextPage, total_count } = repos
	return {
		org,
		sort,
		language,
		page,
		nextPage,
		totalCount: total_count
	}
}

export const mapDispatchToProps = (dispatch) => {
  return {
    handleRepos: (search) => dispatch(getRepos(search))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NextPage)
