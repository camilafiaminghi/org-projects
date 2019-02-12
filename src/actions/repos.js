export const REPOS_REQUEST = 'REPOS_REQUEST'
export const REPOS_SUCCESS = 'REPOS_SUCCESS'
export const REPOS_FAIL = 'REPOS_FAIL'
export const PAGE_REQUEST = 'PAGE_REQUEST'
export const PAGE_SUCCESS = 'PAGE_SUCCESS'
export const PAGE_FAIL = 'PAGE_FAIL'


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

export function getReposByPage (payload) {
	return {
		type: PAGE_REQUEST,
		payload
	}
}

export function getReposByPageSuccess (repos) {
	return {
		type: PAGE_SUCCESS,
		payload: repos
	}
}

export function getReposByPageFail (errors) {
	return {
		type: PAGE_FAIL,
		errors
	}
}
