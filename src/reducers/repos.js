import { REPOS_REQUEST, REPOS_SUCCESS, REPOS_FAIL } from '../actions/repos'

export const initialState = {
	page: 1,
	sort: 'stars'
}

const repos = (state = {...initialState}, action) => {
	switch (action.type) {
		case REPOS_REQUEST:
			return {
				...state,
				...action.payload,
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
