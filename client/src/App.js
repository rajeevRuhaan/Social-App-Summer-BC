import React, { useEffect, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import Container from 'react-bootstrap/Container';

import './App.scss';
import store from './redux/store';
import Footer from './components/Footer/Footer';
import SignInPage from './pages/SignInPage/SignInPage';
import { loadUser } from './redux/actions/auth';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import DashboardPage from './pages/DashboardPage/DashboardPage';
import HomePage from './pages/HomePage/HomePage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import Setting from './pages/SettingPage/Setting';

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        {/* <Container> */}
        <Switch>
          <Route exact path='/' component={SignInPage} />
          <Route exact path='/register' component={SignUpPage} />
          <Route exact path='/home' component={HomePage} />
          <PrivateRoute exact path='/dashboard' component={DashboardPage} />
          <PrivateRoute exact path='/profile/:userId' component={ProfilePage} />
          <PrivateRoute exact path='/setting' component={Setting} />
        </Switch>
        {/* </Container> */}
      </Router>
    </Provider>
  );
};

export default App;
