import repos from './repos'
import reposError from './reposError'
import branches from './branches'
import branchesError from './branchesError'

export const getReposByOrg = ({org, sort, language}) => {

	/*
	 * +sort:stars || +sort:forks
	 * +language:assembly
	 */
	// const RESTAPI_URL = 'https://api.github.com'
	// const languageFilter = (language) ? `+language:${language}` : ''
	// const url = `${RESTAPI_URL}/search/repositories?q=org:${org}+sort:${sort}${languageFilter}`

	// PAGINATION
	// &per_page=${perPage}&page=${page}

	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (org === 'test error') {
				reject(reposError)
			}
      resolve(repos)
    }, 1000)
	})
}

export const getBranches = (action) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {

			if (action.org === 'test' && action.repo === 'error') {
				reject(branchesError)
			}
      resolve(branches)
    }, 1000)
	})
}
