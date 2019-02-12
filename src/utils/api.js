import axios from 'axios'

const RESTAPI_URL = 'https://api.github.com'
const RESTAPI_AUTH = 'token dd0f9fb05e1398f0784dd208d44d141b46134d5f'

// https://api.github.com/search/repositories?q=org:facebook+sort:stars&per_page=3
// https://api.github.com/repos/facebook/react/branches
// language:javascript
// axios.defaults.baseURL = process.env.REACT_APP_BASE_URL || "";
// axios.defaults.headers.common["Content-Type"]="application/json";
// axios.defaults.headers.common["Authorization"] = `Bearer${token}`;

export const getReposByOrg = ({org, sort, language, page}) => {
	/*
	 * sort by 'stars' || 'forks'
	 */
	const perPage = 4
	const withLanguage = (language) ? `+language:${language}`
	const api = `${RESTAPI_URL}/search/repositories?q=org:${org}+sort:${sort}${withLanguage}&per_page=${perPage}&page=${page}`
	return axios.get(api, {
		headers: {
			'Accept': 'application/json',
			'Authorization': RESTAPI_AUTH
		}
	})
	.then(response => response.data)
	.catch(error => { throw error })
}

export const getBranches = (action) => {
	const api = `${RESTAPI_URL}/repos/${action.org}/${action.repo}/branches`
	return axios.get(api, {
		headers: {
			'Accept': 'application/json',
			'Authorization': RESTAPI_AUTH
		}
	})
	.then(response => response.data)
	.catch(error => { throw error })
}
