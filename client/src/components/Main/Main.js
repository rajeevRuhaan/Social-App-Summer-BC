import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../../Pages/Home/Home';
import Profile from '../../Pages/Profile/Profile';
import Logout from '../../Pages/Logout/Logout';

const Main = () => {
    return (
        <main>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/profile">
                    <Profile />
                </Route>
                <Route path="/logout">
                    <Logout />
                </Route>
            </Switch>
        </main>
    );
};

export default Main;