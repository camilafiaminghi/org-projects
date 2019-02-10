export const BRANCHES_REQUEST = 'BRANCHES_REQUEST'
export const BRANCHES_SUCCESS = 'BRANCHES_SUCCESS'
export const BRANCHES_FAIL = 'BRANCHES_FAIL'

export function getBranches (org, repo) {
	return {
		type: BRANCHES_REQUEST,
		payload: {
			org,
			repo
		}
	}
}

export function getBranchesSuccess (branches) {
	return {
		type: BRANCHES_SUCCESS,
		payload: branches
	}
}

export function getBranchesFail (error) {
	return {
		type: BRANCHES_FAIL,
		error
	}
}
