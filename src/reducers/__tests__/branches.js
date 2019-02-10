import { BRANCHES_REQUEST, BRANCHES_SUCCESS, BRANCHES_FAIL } from './../../actions/branches'
import branches from './../branches'
import data from './../../__helpers__/branches'

describe('branches reducer', () => {
	it('should handle initial state', () => {
		expect(branches(undefined, {})).toEqual({})
	})

	it('should handle BRANCHES_REQUEST', () => {
		expect(branches({}, {
			type: BRANCHES_REQUEST,
			payload: 'test'
		})).toMatchObject({org: 'test', loading: true})
	})

	it('should handle BRANCHES_SUCCESS', () => {
		expect(branches({}, {
			type: BRANCHES_SUCCESS,
			payload: data
		})).toMatchObject({errors: null, loading: false, items: data})
	})

	it('should handle BRANCHES_FAIL', () => {
		expect(branches({}, {
			type: BRANCHES_FAIL
		})).toMatchObject({loading: false})
	})
})
