import configureMockStore from 'redux-mock-store'
import {
	BRANCHES_REQUEST,
	BRANCHES_SUCCESS,
	BRANCHES_FAIL,
	getBranches,
	getBranchesSuccess,
	getBranchesFail } from './../branches'
import branches from './../../__helpers__/branches'
import branchesError from './../../__helpers__/branchesError'

const configStore = configureMockStore()
const store = configStore({})

describe('branches action', () => {
	// CLEAR ACTIONS BEFORE RUN STORE AGAIN TEST MODULE INDEPEDENT OF OTHERS MODULES
	afterEach(() => store.clearActions())

	it('getBranches should return an object', () => {
		expect(getBranches('org_name', 'repo_name')).toEqual({
			type: BRANCHES_REQUEST,
			payload: {org:'org_name', repo:'repo_name'}
		})
	})

	it('getBranchesSuccess should return an object', () => {
		expect(getBranchesSuccess(branches)).toEqual({
			type: BRANCHES_SUCCESS,
			payload: branches
		})
	})

	it('getBranchesFail should return an object', () => {
		expect(getBranchesFail({message: 'Not Found', status: 404})).toEqual({
			type: BRANCHES_FAIL,
			errors: {message: 'Not Found', status: 404}
		})
	})
})
