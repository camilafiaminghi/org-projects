import configureMockStore from 'redux-mock-store'
import {
	REPOS_REQUEST,
	REPOS_SUCCESS,
	REPOS_FAIL,
	getRepos,
	getReposSuccess,
	getReposFail } from './../repos'
import repos from './../../__helpers__/repos'
import reposError from './../../__helpers__/reposError'

const configStore = configureMockStore()
const store = configStore({})

describe('repos action', () => {
	// CLEAR ACTIONS BEFORE RUN STORE AGAIN TEST MODULE INDEPEDENT OF OTHERS MODULES
	afterEach(() => store.clearActions())

	it('getRepos should return an object', () => {
		const payload = {org:'test'}
		expect(getRepos(payload)).toEqual({
			type: REPOS_REQUEST,
			payload: payload
		})
	})

	it('getReposSuccess should return an object', () => {
		expect(getReposSuccess(repos)).toEqual({
			type: REPOS_SUCCESS,
			payload: repos
		})
	})

	it('getReposFail should return an object', () => {
		expect(getReposFail(reposError)).toEqual({
			type: REPOS_FAIL,
			errors: reposError
		})
	})
})
