import { call, put, takeEvery } from 'redux-saga/effects'
// import { getReposByOrg } from './../utils/api'
import { getReposByOrg } from './../__helpers__/api'
import { REPOS_REQUEST, REPOS_SUCCESS, REPOS_FAIL } from './../actions/repos'

export function* fetchRepos (action) {
	try {
		const payload = yield call(getReposByOrg, action.payload)
		yield put({ type: REPOS_SUCCESS, payload })
	} catch (error) {
		yield put({ type: REPOS_FAIL, errors: error.response.data.errors })
	}
}

function* rootSaga() {
  yield takeEvery(REPOS_REQUEST, fetchRepos);
}

export default rootSaga
