import {
	REPOS_REQUEST,
	REPOS_SUCCESS,
	REPOS_FAIL,
	PAGE_REQUEST,
	PAGE_SUCCESS,
	PAGE_FAIL } from '../actions/repos'

export const initialState = {
	page: 1,
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
				nextPage: (action.payload.items % perPage === 0) ? false : true,
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
		case PAGE_REQUEST:
			return {
				...state,
				...action.payload,
				loading: true
			}
		case PAGE_SUCCESS:
			return {
				...state,
				...action.payload,
				items: [...state.items, ...action.payload.items],
				nextPage: (action.payload.items % perPage === 0) ? false : true,
				languages: [...new Set(([...state.languages, ...action.payload.items] || []).map(item => item.language))],
				errors: null,
				loading: false
			}
		case PAGE_FAIL:
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
