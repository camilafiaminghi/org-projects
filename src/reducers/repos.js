import { REPOS_REQUEST, REPOS_SUCCESS, REPOS_FAIL } from '../actions/repos'

const repos = (state = {}, action) => {
	switch (action.type) {
		case REPOS_REQUEST:
			return {
				...state,
				org: action.payload,
				loading: true
			}
		case REPOS_SUCCESS:
			return {
				...state,
				...action.payload,
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
