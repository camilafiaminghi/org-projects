import React from 'react'
import renderer from 'react-test-renderer'
import Branch from './../Branch'
import branches from './../../__helpers__/branches'

const branch = branches[0]
let router
let wrapper

describe('<Branch />', () => {
	beforeEach(() => {
		wrapper = shallow(<Branch {...branch} />)
	})

	it('matches snapshot', () => {
		const component = renderer.create(<Branch {...branch} />)
		expect(component.toJSON()).toMatchSnapshot()
	})

	it('should render', () => {
		expect(wrapper.exists()).toBeTruthy()
	})

	it('should has a name', () => {
		expect(wrapper.find('p').exists()).toBeTruthy()
		expect(wrapper.find('p').shallow().props().children).toEqual(branch.name)
	})

	it('should has a link to branch url', () => {
		expect(wrapper.find('a').exists()).toBeTruthy()
		expect(wrapper.find('a').props().href).toEqual(branch.commit.url)
		expect(wrapper.find('a').props().children).toEqual(branch.commit.sha)
	})
})
