import React, { Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import HeroBanner from '../../components/Main/HeroBanner/HeroBanner';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

import SignInForm from '../../components/SignInForm/SignInForm';
import Alert from '../../components/Alert/Alert';

const SignInPage = () => {
  const { isAuthenticated, loading } = useSelector((state) => state.auth);

  //redirect user to dashboard page if user logged in successfully
  if (isAuthenticated && !loading) {
    return <Redirect to='/home' />;
  }

  return (
    <Fragment>
      <Row className='sign-in-page'>
        <Col sm={7}>
          <HeroBanner />
        </Col>
        <Col sm={5}>
          <Alert />
          <div className='sign-up__link'>
            Dont have an account? <Link to='/register'>Get Started</Link>
          </div>
          <SignInForm />
        </Col>
      </Row>
    </Fragment>
  );
};

export default SignInPage;
