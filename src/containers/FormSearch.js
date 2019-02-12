import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getRepos } from './../actions/repos'
import InputText from './../components/InputText'
import { isValid } from '../utils/validation'

export class FormSearch extends Component {

	static propTypes = {
		handleRepos: PropTypes.func.isRequired
	}

	state = {
		form: {
			search: '',
		},
		validation: {
			search: false,
		},
		validated: false,
		submitted: false
	}

	handleOnChange = (name, value, valid) => {
		this.setState((prevState) => ({
			...prevState,
			form: {...prevState.form, [name]: value},
			validation: (prevState.validation.hasOwnProperty(name)) ? {...prevState.validation, [name]: valid} : {...prevState.validation}
		}))

		/* VALIDATE ENTIRE FORM */
		this.setState((prevState) => ({
			...prevState,
			validated: isValid(prevState.validation)
		}))
	}

	handleSubmit = (event) => {
		event.preventDefault()
		const { form } = this.state
		const { sort, page, handleRepos } = this.props
		const org = form.search

		handleRepos({org, sort, page})
	}

	render() {
		const { validated, submitted, form } = this.state

		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<InputText
						name="search"
						placeholder="Organization name"
						maxLength={122}
						charsLeft={true}
						message="This field is required"
						handleOnChange={this.handleOnChange}
						submitted={submitted} />

					<button
						type="submit"
						disabled={!validated}
						className={validated ? 'btn' : 'btn disabled'}>
						Search
					</button>
				</form>
			</div>
		)
	}
}

export const mapStateToProps = ({ repos }) => {
	const { page, sort } = repos

	return {
		page,
		sort
	}
}

export const mapDispatchToProps = (dispatch) => {
  return {
    handleRepos: (search) => dispatch(getRepos(search))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormSearch)
