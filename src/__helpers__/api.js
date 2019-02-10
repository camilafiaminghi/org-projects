import repos from './repos'
import reposError from './reposError'

export const getReposByOrg = (org) => {
	console.log(org)

	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (org === 'test error') {
				reject(reposError)
			}
      resolve(repos)
    }, 1000)
	})
}
