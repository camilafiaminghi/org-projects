import axios from 'axios'

const RESTAPI_URL = 'https://api.github.com'

// https://api.github.com/search/repositories?q=org:facebook+sort:stars&per_page=3
// https://api.github.com/repos/facebook/react/branches

export const getReposByOrg = (org, sort='starts') => {
	return axios.get(`${RESTAPI_URL}/search/repositories?q=org:${org}+sort:stars&per_page=4`, {
		headers: {
			'Accept': 'application/json'
		}
	})
	.then(response => response.data)
	.catch(error => { throw error })
}

export const getBranches = (org, repo) => {
	return axios.get(`${RESTAPI_URL}/repos/${org}/${repo}/branches`, {
		headers: {
			'Accept': 'application/json'
		}
	})
	.then(response => response.data)
	.catch(error => { throw error })
}
