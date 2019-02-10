import { call, put } from 'redux-saga/effects'
import { REPOS_REQUEST, REPOS_SUCCESS, REPOS_FAIL } from './../../actions/repos'
import { BRANCHES_REQUEST, BRANCHES_SUCCESS, BRANCHES_FAIL } from './../../actions/branches'
import { fetchRepos, fetchBranches } from './../saga'

describe('saga middleware', () => {
	const reposAction = {type: REPOS_REQUEST, payload: 'test'}
	const reposGen = fetchRepos(reposAction)

	const branchesAction = {type: BRANCHES_REQUEST, payload: 'test'}
	const branchesGen = fetchRepos(branchesAction)

	it('fetchRepos should receive payload', () => {
		expect(reposGen.next().value.type).toEqual('CALL')
	})

	it('fetchRepos should put action success', () => {
		const value = reposGen.next().value

		expect(value.type).toEqual('PUT')
		expect(value.payload.action.type).toEqual(REPOS_SUCCESS)
	})

	it ('fetchRepos should be done', () => {
		expect(reposGen.next().done).toEqual(true)
	})

	it('fetchBranches should receive payload', () => {
		expect(branchesGen.next().value.type).toEqual('CALL')
	})

	it('fetchBranches should put action success', () => {
		const value = branchesGen.next().value

		expect(value.type).toEqual('PUT')
		expect(value.payload.action.type).toEqual(REPOS_SUCCESS)
	})

	it ('fetchBranches should be done', () => {
		expect(branchesGen.next().done).toEqual(true)
	})
})

