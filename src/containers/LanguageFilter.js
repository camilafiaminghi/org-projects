import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getRepos } from './../actions/repos'

class LanguageFilter extends Component {

	static propTypes = {
		languages: PropTypes.array,
		language: PropTypes.string,
		org: PropTypes.string
	}

	handleOnChange = (event) => {
		const { org, handleRepos } = this.props

		handleRepos({
			org,
			language: (event.target.value.length > 0) ? event.target.value : null,
			sort: 'stars',
			page: 1
		})
	}

	render() {
		const { languages } = this.props

		if (!languages) {
			return (<span>Filter by language is not enabled</span>)
		}

		return (
			<section>
				<h3>Filter by language:</h3>
				<select onChange={this.handleOnChange}>
					<option value=''>All</option>
					{languages.map((item,index) => (
						<option
							key={`${item}-${index}`}
							value={item}>{item}</option>

					))}
				</select>
			</section>
		)
	}
}

export const mapStateToProps = ({ repos }) => {
	const { languages, language, org } = repos

	return {
		languages,
		language,
		org
	}
}

export const mapDispatchToProps = (dispatch) => {
  return {
    handleRepos: (search) => dispatch(getRepos(search))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LanguageFilter)
