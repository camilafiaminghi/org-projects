import { REPOS_REQUEST, REPOS_SUCCESS, REPOS_FAIL } from './../../actions/repos'
import repos from './../repos'
import data from './../../__mocks__/repos'

describe('repos reducer', () => {
	it('should handle initial state', () => {
		expect(repos(undefined, {})).toEqual({})
	})

	it('should handle REPOS_REQUEST', () => {
		expect(repos({}, {
			type: REPOS_REQUEST,
			meta: 'test'
		})).toMatchObject({org:'test', loading: true})
	})

	it('should handle REPOS_SUCCESS', () => {
		expect(repos({}, {
			type: REPOS_SUCCESS,
			payload: data
		})).toMatchObject(data)
	})

	it('should handle REPOS_FAIL', () => {
		expect(repos({}, {
			type: REPOS_FAIL
		})).toMatchObject({loading: false})
	})
})
