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
		const { org, sort, handleRepos } = this.props
		const language = event.target.value
		handleRepos({ language, org, sort })
	}

	render() {
		const { languages } = this.props

		if (!languages) {
			return (<span>Filter by language is not enabled</span>)
		}

		return (
			<section>
				<h3>Filter: </h3>
				<select onChange={this.handleOnChange}>
					<option value=''>All</option>
					{languages.map((item) => (
						<option
							key={item}
							value={item}>{item}</option>

					))}
				</select>
			</section>
		)
	}
}

export const mapStateToProps = ({ repos }) => {
	const { languages, language, sort, org } = repos

	return {
		languages,
		language,
		sort,
		org
	}
}

export const mapDispatchToProps = (dispatch) => {
  return {
    handleRepos: (search) => dispatch(getRepos(search))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LanguageFilter)
