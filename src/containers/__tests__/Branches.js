import React from 'react';
import { MemoryRouter } from 'react-router'
import { Link } from 'react-router-dom'
import renderer from 'react-test-renderer'
import configureMockStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import { Branches } from './../Branches'
import Branch from './../../components/Branch'
import branches from './../../__helpers__/branches'
import branchesError from './../../__helpers__/branchesError'

let provider
let router
let wrapper
let props = {
	errors: null,
	items: null,
	handleBranches: jest.fn()
}
const mockStore = configureMockStore()
const store = mockStore({})

describe('<Branches />', () => {

	beforeEach(() => {
		provider = shallow(
			<Provider store={store}>
				<MemoryRouter>
					<Branches {...props} />
				</MemoryRouter>
			</Provider>)
		router = provider.find(MemoryRouter)
		wrapper = router.find(Branches).shallow()
	})

	it('matches snapshot', () => {
		const component = renderer.create(<MemoryRouter><Branches {...props} /></MemoryRouter>)
		expect(component.toJSON()).toMatchSnapshot()
	})

	it('should render', () => {
		expect(wrapper.exists()).toBeTruthy()
	})

	it('should has a link to go home', () => {
		expect(wrapper.find(Link).exists()).toBeTruthy()
		expect(wrapper.find(Link).props().to).toEqual('/')
		expect(wrapper.find(Link).props().children).toEqual('Go to Home')
	})

	it('should show error', () => {
		props = {
			...props,
			error: branchesError.response.data
		}

		provider = shallow(<Provider store={store}><Branches {...props} /></Provider>)
		wrapper = provider.find(Branches).shallow()
		expect(wrapper.find('span').props().children).toEqual(props.error.message)
	})

	it('should show items', () => {
		props = {
			...props,
			errors: null,
			items: branches
		}

		provider = shallow(<Provider store={store}><Branches {...props} /></Provider>)
		wrapper = provider.find(Branches).shallow()
		expect(wrapper.find(Branch)).toHaveLength(props.items.length)
	})
})
