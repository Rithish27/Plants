import * as actionTypes from './actionTypes';

import {
    AUTH_SUCCESS, 
    AUTH_LOGOUT, 
    SET_AUTH_REDIRECT_PATH,
} from '../reducers/auth';

export const authSuccess = (token, userId, diaplayName, logInEmail) => {
    return AUTH_SUCCESS({
        idToken: token,
		userId: userId,
		name: diaplayName,
		email: logInEmail,
    })
}

export const setAuthRedirectPath = (path) => {
	return SET_AUTH_REDIRECT_PATH({
		path: path
	})
}

export const authCheckState = () => {
	return {
    type: actionTypes.AUTH_CHECK_STATE
  }
}

export const logout = () => {
	return {
		type: actionTypes.AUTH_INITITATE_LOGOUT
	}
}

export const logoutSucceed = () => {
	return AUTH_LOGOUT()
}

export const checkAuthTimeout = (expirationTime) => {
	return {
		type: actionTypes.AUTH_CHECK_TIMEOUT,
		expirationTime: expirationTime
	}
}