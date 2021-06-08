import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import './App.scss';
import store from './redux/store';
import SignInPage from './Pages/SignInPage/SignInPage';
import { loadUser } from './redux/actions/auth';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import DashboardPage from './Pages/DashboardPage/DashboardPage';
import HomePage from './Pages/HomePage/HomePage';
import ProfilePage from './Pages/ProfilePage/ProfilePage';

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path='/' component={SignInPage} />
          <Route exact path='/register' component={SignUpPage} />
          <PrivateRoute exact path='/home' component={HomePage} />
          <PrivateRoute exact path='/dashboard' component={DashboardPage} />
          <PrivateRoute exact path='/profile/:userId' component={ProfilePage} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
