import React, { useEffect, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import Container from 'react-bootstrap/Container';

import './App.scss';
import store from './redux/store';
import Footer from './components/Footer/Footer';
import SignInPage from './Pages/SignInPage/SignInPage';
import { loadUser } from './redux/actions/auth';
import SignUpPage from './Pages/SignUpPage/SignUpPage';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import DashboardPage from './Pages/DashboardPage/DashboardPage';
import HomePage from './Pages/HomePage/HomePage';

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Container>
          <Switch>
            <Route exact path='/' component={SignInPage} />
            <Route exact path='/register' component={SignUpPage} />
            <Route exact path='/home' component={HomePage} />
            <PrivateRoute exact path='/dashboard' component={DashboardPage} />
          </Switch>
        </Container>
      </Router>
    </Provider>
  );
};

export default App;
