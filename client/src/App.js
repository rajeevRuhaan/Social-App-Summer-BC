import React, { useEffect, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import Container from 'react-bootstrap/Container';

import './App.scss';
import store from './redux/store';
<<<<<<< HEAD
import SignInPage from './pages/SignInPage/SignInPage';
=======
import Footer from './components/Footer/Footer';
import SignInPage from './Pages/SignInPage/SignInPage';
>>>>>>> 4f99c40a4e54d3e467ffec4f620565e7169c5470
import { loadUser } from './redux/actions/auth';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
<<<<<<< HEAD
import DashboardPage from './pages/DashboardPage/DashboardPage';
import HomePage from './pages/HomePage/HomePage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
=======
import DashboardPage from './Pages/DashboardPage/DashboardPage';
import HomePage from './Pages/HomePage/HomePage';
>>>>>>> 4f99c40a4e54d3e467ffec4f620565e7169c5470

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
        </Switch>
        {/* </Container> */}
      </Router>
    </Provider>
  );
};

export default App;
