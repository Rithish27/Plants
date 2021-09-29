import {takeEvery, all} from 'redux-saga/effects';

import * as actionTypes from '../actions/actionTypes';

import { 
    logoutSaga, 
    checkAuthTimeoutSaga,
    authCheckStateSaga, 
} from './auth';

export function* watchAuth() {
    yield all([
        takeEvery(actionTypes.AUTH_INITITATE_LOGOUT, logoutSaga),
        takeEvery(actionTypes.AUTH_CHECK_TIMEOUT, checkAuthTimeoutSaga),
        takeEvery(actionTypes.AUTH_CHECK_STATE, authCheckStateSaga),
    ])
}