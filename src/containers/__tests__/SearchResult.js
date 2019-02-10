import React from 'react';
import renderer from 'react-test-renderer'
import configureMockStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import { SearchResult } from './../SearchResult'
import RepoItem from './../../components/RepoItem'
import repos from './../../__helpers__/repos'
import reposError from './../../__helpers__/reposError'

let provider
let wrapper
let props = {
	errors: null,
	items: null,
	org: null
}
const mockStore = configureMockStore()
const store = mockStore({})

describe('<SearchResult />', () => {

	beforeEach(() => {
		provider = shallow(<Provider store={store}><SearchResult {...props} /></Provider>)
		wrapper = provider.find(SearchResult).shallow()
	})

	it('matches snapshot', () => {
		const component = renderer.create(<SearchResult {...props} />)
		expect(component.toJSON()).toMatchSnapshot()
	})

	it('should render', () => {
		expect(wrapper.exists()).toBeTruthy()
	})

	it('should show error', () => {
		props = {
			...props,
			errors: reposError.response.data.errors
		}

		provider = shallow(<Provider store={store}><SearchResult {...props} /></Provider>)
		wrapper = provider.find(SearchResult).shallow()
		expect(wrapper.find('ul').exists()).toBeTruthy()
		expect(wrapper.find('ul').find('li')).toHaveLength(props.errors.length)
	})

	it('should show error', () => {
		props = {
			...props,
			errors: null,
			items: repos.items
		}

		provider = shallow(<Provider store={store}><SearchResult {...props} /></Provider>)
		wrapper = provider.find(SearchResult).shallow()
		expect(wrapper.find(RepoItem)).toHaveLength(props.items.length)
	})
})
