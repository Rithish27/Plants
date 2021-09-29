import { all, delay } from 'redux-saga/effects';
import { put, call } from 'redux-saga/effects';

import * as actions from '../actions/index';

export function* authCheckStateSaga(action) {
	const token = yield localStorage.getItem('token')
	if (!token) {
		yield put(actions.logout())
	} else {
		const expirationDate = yield new Date(localStorage.getItem('expirationDate'))
		if (expirationDate <= new Date()) {
			yield put(actions.logout())
		} else {
			const userId = yield localStorage.getItem('userId')
			const displayName = yield localStorage.getItem('displayName')
			const email = yield localStorage.getItem('email')

			yield put(actions.authSuccess(token, userId, displayName, email))
			yield put(actions.checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000))
		}
	}
}

export function* logoutSaga(action) {
	yield call([localStorage, 'removeItem'], 'token')
	yield call([localStorage, 'removeItem'], 'expirationDate')
	yield call([localStorage, 'removeItem'], 'userId')
	yield call([localStorage, 'removeItem'], 'displayName')
	yield call([localStorage, 'removeItem'], 'email')
	yield put(actions.logoutSucceed())
}

export function* checkAuthTimeoutSaga(action) {
	yield delay(action.expirationTime * 1000)
	yield put(actions.logout())
}