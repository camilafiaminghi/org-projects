import repos from './repos'
import reposError from './reposError'
import branches from './branches'
import branchesError from './branchesError'

export const getReposByOrg = (org) => {
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
