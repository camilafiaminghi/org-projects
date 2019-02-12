import { call, put, takeEvery } from 'redux-saga/effects'
import { getReposByOrg, getBranches } from './../utils/api'
// import { getReposByOrg, getBranches } from './../__helpers__/api'
import { REPOS_REQUEST, REPOS_SUCCESS, REPOS_FAIL, PAGE_REQUEST, PAGE_SUCCESS, PAGE_FAIL } from './../actions/repos'
import { BRANCHES_REQUEST, BRANCHES_SUCCESS, BRANCHES_FAIL } from './../actions/branches'

export function* fetchRepos (action) {
	try {
		const payload = yield call(getReposByOrg, action.payload)
		yield put({ type: REPOS_SUCCESS, payload })
	} catch (error) {
		yield put({ type: REPOS_FAIL, errors: error.response.data.errors })
	}
}

export function* fetchReposWithPage (action) {
	try {
		const payload = yield call(getReposByOrg, action.payload)
		yield put({ type: PAGE_SUCCESS, payload })
	} catch (error) {
		yield put({ type: PAGE_FAIL, errors: error.response.data.errors })
	}
}

export function* fetchBranches (action) {
	try {
		const payload = yield call(getBranches, action.payload)
		yield put({ type: BRANCHES_SUCCESS, payload })
	} catch (error) {
		yield put({ type: BRANCHES_FAIL, error: error.response.data })
	}
}

function* rootSaga() {
  yield takeEvery(REPOS_REQUEST, fetchRepos)
  yield takeEvery(PAGE_REQUEST, fetchReposWithPage)
  yield takeEvery(BRANCHES_REQUEST, fetchBranches)
}

export default rootSaga
