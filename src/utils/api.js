import axios from 'axios'

const RESTAPI_URL = 'https://api.github.com'

//'https://api.github.com/search/repositories?q=org:facebook+sort:stars&per_page=3'

export const getReposByOrg = (org, sort='starts') => {
	return axios.get(`${RESTAPI_URL}/search/repositories?q=org:${org}+sort:stars&per_page=4`, {
		headers: {
			'Accept': 'application/json'
		}
	})
	.then(response => {console.log('response.data'); return response.data;})
	.catch(err => { throw err })
}
