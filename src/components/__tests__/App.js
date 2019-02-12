import React from 'react'
import renderer from 'react-test-renderer'
import App from '../App'

let wrapper

describe('<App />', () => {

	beforeEach(() => {
		wrapper = shallow(<App />)
	})

	it('should render', () => {
		expect(wrapper.exists()).toBeTruthy()
	})
})
