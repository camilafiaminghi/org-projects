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
		const { handleRepos } = this.props

		handleRepos({
			org: form.search,
			language: null,
			sort: 'stars'
		})
	}

	render() {
		const { validated, submitted, form } = this.state

		return (
			<form
				onSubmit={this.handleSubmit}
				className="row">
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
		)
	}
}

export const mapDispatchToProps = (dispatch) => {
  return {
    handleRepos: (search) => dispatch(getRepos(search))
  }
}

export default connect(null, mapDispatchToProps)(FormSearch)
