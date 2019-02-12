export const REPOS_REQUEST = 'REPOS_REQUEST'
export const REPOS_SUCCESS = 'REPOS_SUCCESS'
export const REPOS_FAIL = 'REPOS_FAIL'

export function getRepos (payload) {
	return {
		type: REPOS_REQUEST,
		payload
	}
}

export function getReposSuccess (repos) {
	return {
		type: REPOS_SUCCESS,
		payload: repos
	}
}

export function getReposFail (errors) {
	return {
		type: REPOS_FAIL,
		errors
	}
}
