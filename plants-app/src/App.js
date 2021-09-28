import React, { Suspense, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';

import './App.css';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import Home from './container/Home/Home';
import * as actions from './store/actions/index';
import logout from './component/Logout/Logout';
import Shopping from './container/Shopping/Shopping';


document.addEventListener("DOMContentLoaded", event => {

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries
  
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  
  const firebaseConfig = {
    apiKey: "AIzaSyBRbB9HBMCb_aQnOC9lwuuX9_NbLq1FFlE",
    authDomain: "plant-app-ce794.firebaseapp.com",
    projectId: "plant-app-ce794",
    storageBucket: "plant-app-ce794.appspot.com",
    messagingSenderId: "564003385864",
    appId: "1:564003385864:web:9a8e7e6bc5d7ca67a157bd",
    measurementId: "G-YQ0S4ST97P"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
})

const App = () => {

	const isAuthenticated = useSelector(state => state.auth.token !== null)

  const dispatch = useDispatch()

  const onTryAutoSignup = useCallback(() => dispatch(actions.authCheckState()), [dispatch])

  useEffect(() => {
    onTryAutoSignup()
  }, [onTryAutoSignup])

  // routes before authentication
  let routes = (
    <Switch>
      <Route path="/" render={() => <Home/>}/>
      <Redirect to="/"/>
    </Switch>
  )

  if (isAuthenticated) {
    // routes after user is authenticated
    routes = (
      <Switch>
        <Route path="/" exact render={() => <Home/>}/>
        <Route path="/logout" component={logout}/>
        <Route path="/shoping" exact render={() => <Shopping/>}/>
        <Redirect to="/"/>
      </Switch>
    )
  }

  return (
    <div className="App">
      <Suspense>
        {routes}
      </Suspense>
    </div>
  );
}

export default withRouter(App);
