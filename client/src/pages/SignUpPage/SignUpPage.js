import React, { Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import Alert from '../../components/Alert/Alert';

const SignUpPage = () => {
  const { isAuthenticated, loading } = useSelector((state) => state.auth);
  //redirect user to dashboard page if user logged in successfully
  if (isAuthenticated && !loading) {
    return <Redirect to='/home' />;
  }

  return (
    <Fragment>
      <Row className='sign-up-page'>
        <Col sm={6}>Hero Banner</Col>
        <Col sm={6}>
          <Alert />
          <div className='sign-in__link'>
            Already have an account? <Link to='/'>Sign In</Link>
          </div>
          <SignUpForm />
        </Col>
      </Row>
    </Fragment>
  );
};

export default SignUpPage;
