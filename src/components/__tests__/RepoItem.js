import React from 'react'
import { MemoryRouter } from 'react-router'
import { Link } from 'react-router-dom'
import renderer from 'react-test-renderer'
import RepoItem from './../RepoItem'
import repos from './../../__helpers__/repos'

const repo = repos.items[0]
let router
let wrapper

describe('<RepoItem />', () => {
	beforeEach(() => {
		const props = {
			...repo,
			org: repo.owner.login
		}
		router = shallow(<MemoryRouter><RepoItem {...props} /></MemoryRouter>)
		wrapper = router.find(RepoItem).shallow()
	})

	it('matches snapshot', () => {
		const props = {
			...repo,
			org: repo.owner.login
		}
		const component = renderer.create(<MemoryRouter><RepoItem {...props} /></MemoryRouter>)
		expect(component.toJSON()).toMatchSnapshot()
	})

	it('should render', () => {
		expect(wrapper.exists()).toBeTruthy()
	})

	it('should has a link', () => {
		expect(wrapper.find('Link').exists()).toBeTruthy()
	})

	it('should has a description', () => {
		expect(wrapper.find('p').exists()).toBeTruthy()
		expect(wrapper.find('p').shallow().props().children).toEqual(repo.description)
	})

	it('should has languare and starred count', () => {
		expect(wrapper.find('span').exists()).toBeTruthy()
		expect(wrapper.find('span').get(0).props.children[1]).toEqual(<strong>{repo.language}</strong>)
		expect(wrapper.find('span').get(1).props.children[1]).toEqual(<strong>{repo.stargazers_count}</strong>)
	})
})
