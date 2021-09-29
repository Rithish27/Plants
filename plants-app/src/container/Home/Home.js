import React from 'react';

import UserAuthentication from './UserAuthentication/userAuthentication';

import classes from './Home.module.css';

const Home = () => {
    return (
        <div className={classes.home}>
            <div>
                <h1>Leaf Now</h1>
                <p>Connecting enthusiasts</p>
            </div>
            <UserAuthentication/>
        </div>
    )
}

export default Home;