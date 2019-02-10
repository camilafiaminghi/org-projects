export const REPOS_REQUEST = 'REPOS_REQUEST'
export const REPOS_SUCCESS = 'REPOS_SUCCESS'
export const REPOS_FAIL = 'REPOS_FAIL'

export function getRepos (org) {
	return {
		type: REPOS_REQUEST,
		meta: org
	}
}

export function getReposSuccess (repos) {
	return {
		type: REPOS_SUCCESS,
		payload: repos
	}
}

export function getReposFail (error) {
	return {
		type: REPOS_FAIL,
		error
	}
}