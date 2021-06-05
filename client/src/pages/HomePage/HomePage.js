import React, { Fragment } from 'react';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useSelector } from 'react-redux';
import CustomNavbar from '../../components/Navbar/Navbar';
import Spinner from '../../components/Spinner/Spinner';
import UserBox from '../../components/UserBox/UserBox';
import CreatePostBox from '../../components/CreatPostBox/CreatePostBox';

const HomePage = () => {
  const { loading } = useSelector((state) => state.auth);

  return loading ? (
    <Spinner />
  ) : (
    <Fragment>
      <CustomNavbar />
      <section className='homepage-content'>
        <Row>
          <Col xs={4}>
            <UserBox />
          </Col>
          <Col xs={8}>
            <CreatePostBox />
          </Col>
        </Row>
      </section>
    </Fragment>
  );
};

export default HomePage;
