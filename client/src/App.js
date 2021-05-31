import React, { useEffect, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import './App.scss';
import store from './redux/store';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import LandingPage from './pages/LandingPage';
import { loadUser } from './redux/actions/user';

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={LandingPage} />
        </Switch>
        <Footer />
      </Router>
    </Provider>
  );
};

export default App;
