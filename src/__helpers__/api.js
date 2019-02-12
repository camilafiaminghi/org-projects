import repos from './repos'
import reposError from './reposError'
import branches from './branches'
import branchesError from './branchesError'

export const getReposByOrg = ({org, sort, page}) => {

	/*
	 * +sort:stars || +sort:forks
	 * +language:assembly
	 */
	const RESTAPI_URL = 'https://api.github.com'
	const perPage = 4
	const url = `${RESTAPI_URL}/search/repositories?q=org:${org}+sort:${sort}&per_page=${perPage}&page=${page}`
	console.log('getReposByOrg', url)

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
