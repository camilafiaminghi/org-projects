import { call, put } from 'redux-saga/effects'
import { REPOS_REQUEST, REPOS_SUCCESS, REPOS_FAIL } from './../../actions/repos'
import { fetchRepos } from './../saga'

describe('saga middleware', () => {
	const action = {type: REPOS_REQUEST, meta: 'test'}
	const generator = fetchRepos(action)

	it('fetchRepos should receive meta', () => {
		expect(generator.next().value.type).toEqual('CALL')
	})

	it('fetchRepos should put action success', () => {
		const value = generator.next().value

		expect(value.type).toEqual('PUT')
		expect(value.payload.action.type).toEqual(REPOS_SUCCESS)
	})

	it ('fetchRepos should be done', () => {
		expect(generator.next().done).toEqual(true)
	})
})

