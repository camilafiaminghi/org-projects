import { REPOS_REQUEST, REPOS_SUCCESS, REPOS_FAIL } from '../actions/repos'

const repos = (state = {}, action) => {
	switch (action.type) {
		case REPOS_REQUEST:
			return {
				...state,
				loading: true,
				org: action.meta
			}
		case REPOS_SUCCESS:
			return {
				...state,
				loading: false,
				...action.payload
			}
		case REPOS_FAIL:
			return {
				...state,
				loading: false,
				...action.error
			}
		default:
			return state
	}
}

export default repos
