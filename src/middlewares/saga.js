import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { getReposByOrg } from './../utils/api'
import { REPOS_REQUEST, REPOS_SUCCESS, REPOS_FAIL } from './../actions/repos'

export function* fetchRepos (action) {
	try {
		const payload = yield call(getReposByOrg, action.meta)
		yield put({
			type: REPOS_SUCCESS,
			payload
		})
	} catch (e) {
		yield put({
			type: REPOS_FAIL,
			error: e.message
		})
	}
}

function* rootSaga() {
  yield takeEvery(REPOS_REQUEST, fetchRepos);
}

export default rootSaga
