import React from 'react'
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