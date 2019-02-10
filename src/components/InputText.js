import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { validationRules } from '../utils/validation'

class InputText extends Component {
	static propTypes = {
		name: PropTypes.string.isRequired,
		placeholder: PropTypes.string.isRequired,
		maxLength: PropTypes.number.isRequired,
		handleOnChange: PropTypes.func.isRequired,
		submitted: PropTypes.bool,
		charsLeft: PropTypes.bool,
		message: PropTypes.string,
		value: PropTypes.string
	}

	state = {
		text: '',
		changed: false,
		valid: false
	}

	handleValidation = (event) => {
		const value = event.target.value

		if ( value.length > 0 ) {
			const { name } = this.props
			const valid = validationRules(name, value)

			this.setState((prevState) => ({
				...prevState,
				text: value,
				changed: true,
				valid
			}))

			this.props.handleOnChange(name, value, valid)
		}
	}

	render() {
		const { changed, valid, text } = this.state
		const { name, placeholder, maxLength, charsLeft, message, submitted } = this.props
		const textLeft = maxLength - text.length

		return (
			<div>
				<input
					type="text"
					name={name}
					placeholder={placeholder}
					maxLength={maxLength}
					value={text}
					onChange={this.handleValidation}
					autoComplete="off" />

				{ (textLeft <= (maxLength - Math.round(maxLength/2)) && charsLeft && changed) && (<span>characteres left [{ textLeft }]</span>) }
				{ ((!valid && changed) && submitted) && (<span>{message}</span>) }
			</div>
		)
	}
}

export default InputText
