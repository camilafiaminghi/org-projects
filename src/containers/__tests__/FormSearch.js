import React from 'react';
import renderer from 'react-test-renderer'
import configureMockStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import { FormSearch } from './../FormSearch'
import InputText from './../../components/InputText'
import { validation, isValid } from './../../utils/validation'

let provider
let wrapper

const mockStore = configureMockStore()
const store = mockStore({})
const props = {
	handleRepos: jest.fn()
}
const state = {
	form: {
		search: 'test',
	},
	validation: {
		search: true,
	},
	validated: true,
	submitted: false
}

describe('<FormSearch />', () => {

	beforeEach(() => {
		provider = shallow(<Provider store={store}><FormSearch {...props} /></Provider>)
		wrapper = provider.find(FormSearch).shallow()
	})

	it('matches snapshot', () => {
		const component = renderer.create(<FormSearch {...props} />)
		expect(component.toJSON()).toMatchSnapshot()
	})

	it('should render', () => {
		expect(wrapper.exists()).toBeTruthy()
	})

	it('should has InputText component', () => {
		expect(wrapper.find(InputText).exists()).toBeTruthy()
	})

	it('should has button type submit', () => {
		const button = wrapper.find('button')

		expect(button.exists()).toBeTruthy()
		expect(button.shallow().props().type).toEqual('submit')
		expect(button.shallow().props().disabled).toEqual(true)
	})

	it('should change state handleOnChange', () => {
		wrapper.instance().handleOnChange('search', 'test', true)
		expect(wrapper.state()).toEqual(state)
	})

	it('should enable button submit', () => {
		wrapper.setState(state)
		const button = wrapper.find('button')
		expect(wrapper.state()).toEqual(state)
		expect(button.shallow().props().disabled).toEqual(false)
	})

	it('should handleSubmit', () => {
		wrapper.setState(state)
		const form = wrapper.find('form')
		form.simulate('submit', {preventDefault() {}})
		expect(props.handleRepos).toHaveBeenCalledTimes(1)
	})
})
