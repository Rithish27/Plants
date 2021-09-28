import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from 'react-router-dom';

import 'firebase/auth';
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

import * as actions from '../../../store/actions/index';

import classes from './userAuthentication.module.css';

// authenticates a user
const UserAuthentication = () => {

	const [googleAuthStatus, setgoogleAuthStatus] = useState(false)

	const isAuthenticated = useSelector(state => state.auth.token !== null)
    const authRedirectPath = useSelector(state => state.auth.authRedirectPath)

    const dispatch = useDispatch()

    const googleAuthSuccess = (token, userId, displayName, email) => dispatch(actions.authSuccess(token, userId, displayName, email))
	const onSetAuthRedirectPath = useCallback(() => dispatch(actions.setAuthRedirectPath('/shoping')), [dispatch])

    useEffect(() => {
		if (isAuthenticated || googleAuthStatus) {
			onSetAuthRedirectPath()
		}
	}, [isAuthenticated, onSetAuthRedirectPath, googleAuthStatus])

    //google OAuth login handler
    const googleLoginHandler = () => {
        const provider = new GoogleAuthProvider();
        const auth = getAuth();
        signInWithPopup(auth, provider)
            .then((result) => {
                // console.log(result)

                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                // const user = result.user;

                setgoogleAuthStatus(true)

                // The signed -in user info.
                const userId = result.user.uid;
                const displayName = result.user.displayName;
                const email = result.user.email;

                // calculating the expiration date for token to log out
                const expirationDate = new Date(new Date().getTime() + 3600 * 1000);

                // chrome local storage inatialization
                localStorage.setItem('expirationDate', expirationDate)
                localStorage.setItem('token', token)
                localStorage.setItem('userId', userId)
                localStorage.setItem('displayName', displayName)
                localStorage.setItem('email', email)

                googleAuthSuccess(token, userId, displayName, email)

            }).catch((error) => {
                alert(error.message)
                // console.log(error)
                // Handle Errors here.
                // const errorCode = error.code;
                // const errorMessage = error.message;
                // The email of the user's account used.
                // const email = error.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });
    }

    // Sets the redirect path if login is Successful.
	let authRedirect = null;
	if (isAuthenticated) {
		authRedirect = <Redirect to={authRedirectPath} />
    }

    return (
        <div className={classes.login_button}>
            {authRedirect}
            <button onClick={googleLoginHandler}>
                <h2>Continue with Google</h2>
            </button>
        </div>
    )
}

export default UserAuthentication;