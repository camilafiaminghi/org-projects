import { REPOS_REQUEST, REPOS_SUCCESS, REPOS_FAIL } from './../../actions/repos'
import repos, { initialState } from './../repos'
import data from './../../__helpers__/repos'

describe('repos reducer', () => {
	it('should handle initial state', () => {
		expect(repos({...initialState}, {})).toEqual({...initialState})
	})

	it('should handle REPOS_REQUEST', () => {
		expect(repos({...initialState}, {
			type: REPOS_REQUEST,
			payload: {org: 'test'}
		})).toMatchObject({...initialState, org: 'test', loading: true})
	})

	it('should handle REPOS_SUCCESS', () => {
		expect(repos({...initialState}, {
			type: REPOS_SUCCESS,
			payload: data
		})).toMatchObject({...initialState, ...data})
	})

	it('should handle REPOS_FAIL', () => {
		expect(repos({}, {
			type: REPOS_FAIL
		})).toMatchObject({loading: false})
	})
})
