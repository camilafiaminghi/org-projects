import React from 'react'
import renderer from 'react-test-renderer'
import InputText from './../InputText'
import { validation, isValid } from './../../utils/validation'

let props
let wrapper
const state = {
	text: '',
	changed: false,
	valid: false
}

describe('<InputText />', () => {

	beforeEach(() => {
		props = {
			name: 'search',
			placeholder: '',
			maxLength: 122,
			handleOnChange: jest.fn(),
			submitted: false,
			charsLeft: false,
			message: '',
			value: ''
		}
		wrapper = shallow(<InputText {...props} />)
	})

	it('matches snapshot', () => {
		const component = renderer.create(<InputText {...props} />)
		expect(component.toJSON()).toMatchSnapshot()
	})

	it('should render', () => {
		expect(wrapper.exists()).toBeTruthy()
	})

	it('should handleValidation', () => {
		const input = wrapper.find('input')
		input.simulate('change', {target: {value: 'test'}})

		expect(wrapper.state('text')).toEqual('test')
		expect(props.handleOnChange).toHaveBeenCalledTimes(1)
	})
})
