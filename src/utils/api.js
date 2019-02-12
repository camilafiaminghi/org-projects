import axios from 'axios'

const RESTAPI_URL = 'https://api.github.com'
const RESTAPI_AUTH = 'token dd0f9fb05e1398f0784dd208d44d141b46134d5f'

// https://api.github.com/search/repositories?q=org:facebook+sort:stars&per_page=3
// https://api.github.com/repos/facebook/react/branches

export const getReposByOrg = (org, sort='starts') => {
	return axios.get(`${RESTAPI_URL}/search/repositories?q=org:${org}+sort:stars&per_page=4`, {
		headers: {
			'Accept': 'application/json',
			'Authorization': RESTAPI_AUTH
		}
	})
	.then(response => response.data)
	.catch(error => { throw error })
}

export const getBranches = (action) => {
	return axios.get(`${RESTAPI_URL}/repos/${action.org}/${action.repo}/branches`, {
		headers: {
			'Accept': 'application/json',
			'Authorization': RESTAPI_AUTH
		}
	})
	.then(response => response.data)
	.catch(error => { throw error })
}
