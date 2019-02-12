import axios from 'axios'

const RESTAPI_URL = 'https://api.github.com'
const RESTAPI_TOKEN = 'token dd0f9fb05e1398f0784dd208d44d141b46134d5f'

axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.headers.common['Authorization'] = RESTAPI_TOKEN;

export const getReposByOrg = ({org, sort, language}) => {

	const languageFilter = (language) ? `+language:${language}` : ''
	const api = `${RESTAPI_URL}/search/repositories?q=org:${org}+sort:${sort}${languageFilter}&type=all`

	/* TODO PAGINATION */
	// &per_page=${perPage}&page=${page}`

	return axios.get(api)
		.then(response => response.data)
		.catch(error => { throw error })
}

export const getBranches = ({org, repo}) => {
	const api = `${RESTAPI_URL}/repos/${org}/${repo}/branches`
	return axios.get(api)
		.then(response => response.data)
		.catch(error => { throw error })
}
