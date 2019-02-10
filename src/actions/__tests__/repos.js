import configureMockStore from 'redux-mock-store'
import {
	REPOS_REQUEST,
	REPOS_SUCCESS,
	REPOS_FAIL,
	getRepos,
	getReposSuccess,
	getReposFail } from './../repos'
import repos from './../../__mocks__/repos'

const configStore = configureMockStore()
const store = configStore({})

describe('repos action', () => {
	// CLEAR ACTIONS BEFORE RUN STORE AGAIN TEST MODULE INDEPEDENT OF OTHERS MODULES
	afterEach(() => store.clearActions())

	it('getRepos should return an object', () => {
		expect(getRepos('test')).toEqual({
			type: REPOS_REQUEST,
			meta: 'test'
		})
	})

	it('getReposSuccess should return an object', () => {
		expect(getReposSuccess(repos)).toEqual({
			type: REPOS_SUCCESS,
			payload: repos
		})
	})

	it('getReposFail should return an object', () => {
		expect(getReposFail({message: 'Not Found', status: 404})).toEqual({
			type: REPOS_FAIL,
			error: {message: 'Not Found', status: 404}
		})
	})
})