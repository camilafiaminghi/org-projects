import { BRANCHES_REQUEST, BRANCHES_SUCCESS, BRANCHES_FAIL } from '../actions/branches'

const branches = (state = {}, action) => {
	switch (action.type) {
		case BRANCHES_REQUEST:
			return {
				...state,
				org: action.payload,
				loading: true
			}
		case BRANCHES_SUCCESS:
			return {
				...state,
				items: action.payload,
				errors: null,
				loading: false
			}
		case BRANCHES_FAIL:
			return {
				...state,
				errors: action.errors,
				loading: false
			}
		default:
			return state
	}
}

export default branches
