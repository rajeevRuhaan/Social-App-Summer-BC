import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import './App.scss';
import store from './redux/store';
import SignInPage from './pages/SignInPage/SignInPage';
import { loadUser } from './redux/actions/auth';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import DashboardPage from './pages/DashboardPage/DashboardPage';
import HomePage from './pages/HomePage/HomePage';

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
          <Route exact path='/home' component={HomePage} />
          <PrivateRoute exact path='/dashboard' component={DashboardPage} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
