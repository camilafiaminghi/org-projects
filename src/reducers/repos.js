import {
	REPOS_REQUEST,
	REPOS_SUCCESS,
	REPOS_FAIL } from '../actions/repos'

export const initialState = {
	sort: 'stars'
}

export const perPage = 8

const repos = (state = {...initialState}, action) => {
	switch (action.type) {
		case REPOS_REQUEST:
			return {
				...state,
				...action.payload,
				items: [],
				total_count: 0,
				loading: true
			}
		case REPOS_SUCCESS:
			return {
				...state,
				...action.payload,
				languages: [...new Set((action.payload.items || []).map(item => item.language))],
				errors: null,
				loading: false
			}
		case REPOS_FAIL:
			return {
				...state,
				errors: action.errors,
				loading: false
			}
		default:
			return state
	}
}

export default repos
